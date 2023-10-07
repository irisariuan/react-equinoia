import { readFileSync, writeFileSync } from "fs";
import { PrivateRequest } from "../declaration";
import { kv } from '@vercel/kv'

export interface SchoolEditRequest extends PrivateRequest {
    type: 'remove' | 'add',
    data: School[]
}

export interface School {
    schoolName: {
        chineseName: string,
        englishName: string,
    },
    cabinetName: string
}
export async function readSchools(): Promise<School[]> {
    const cabinet = await kv.lrange('cabinetName', 0, -1)
    const chin = await kv.lrange('chineseName', 0, -1)
    const eng = await kv.lrange('englishName', 0, -1)
    const res = cabinet.reduce((p, n, i) => { return p.concat({ cabinetName: n, schoolName: { chineseName: chin[i], englishName: eng[i] } } as School) }, [] as School[])
    return res
}

export async function addScool(school: School) {
    const index = await kv.lpos('chineseName', school.schoolName.chineseName)
    if (index !== null) {
        return false
    }
    await kv.lpush('cabinetName', school.cabinetName)
    await kv.lpush('englishName', school.schoolName.englishName)
    await kv.lpush('chineseName', school.schoolName.chineseName)
    return true
}
export async function removeSchool(school: School) {
    const index = await kv.lpos('chineseName', school.schoolName.chineseName)
    if (index === null) {
        return false
    }
    await kv.lrem('cabinetName', 1, await kv.lindex('cabinetName', index))
    await kv.lrem('englishName', 1, await kv.lindex('englishName', index))
    await kv.lrem('chineseName', 1, await kv.lindex('chineseName', index))
    return true
}

export function formatSchoolString(s: string): string {
    return s.replaceAll(/(?<!\\)(,)/g, String.raw`\,`)
}
export function formatSchools(school: School[]) {
    return school.reduce((old, sch) => {
        return old + '\n' + [sch.schoolName.englishName, sch.schoolName.chineseName, sch.cabinetName].map(formatSchoolString).join(',')
    }, '').slice(1)
}

export function readCsv(filename: string, splitPoint = 3): School[] | undefined {
    return readFileSync(filename, { encoding: 'utf-8' }).replaceAll('\n', ',').replaceAll('\r', '').match(/([^\\\][^,]|\\,)+/g)?.reduce((old: string[][], n) => {
        let o = old
        o[o.length - 1].push(n.trim())
        if (o[o.length - 1].length >= splitPoint) {
            o.push([])
        }
        return o
    }, [[]]).map(([englishName, chineseName, cabinetName]): School => {
        return { schoolName: { englishName, chineseName }, cabinetName }
    }).slice(0, -1)
}

export function writeCsv(filename: string, content: School[]) {
    return writeFileSync(filename, formatSchools(content))
}