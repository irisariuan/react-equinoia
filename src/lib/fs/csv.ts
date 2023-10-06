import { readFileSync, writeFileSync } from 'fs';
import { PrivateRequest } from "../declaration";

export interface SchoolEditRequest extends PrivateRequest {
    type: 'remove' | 'add' | 'change',
    data: School[]
}

export interface School {
    schoolName: {
        chineseName: string,
        englishName: string,
    },
    cabinetName: string
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

export function formatSchoolString(s: string): string {
    return s.replaceAll(/(?<!\\)(,)/g, String.raw`\,`)
}
export function formatSchools(school: School[]) {
    return school.reduce((old, sch) => {
        return old + '\n' + [sch.schoolName.englishName, sch.schoolName.chineseName, sch.cabinetName].map(formatSchoolString).join(',')
    }, '').slice(1)
}

export function writeCsv(filename: string, content: School[]) {
    return writeFileSync(filename, formatSchools(content))
}