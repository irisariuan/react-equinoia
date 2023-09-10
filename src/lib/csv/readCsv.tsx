import { PathLike, readFileSync } from "fs";

export interface School {
    schoolName: {
        chineseName: string,
        englishName: string,
    },
    cabinetName: string,
    instagramName: string
}
export function readCsv(filename: string, splitPoint = 4): School[] | undefined {
    return readFileSync(filename, { encoding: 'utf-8' }).replaceAll('\n', ',').replaceAll('\r', '').match(/([^\\\][^,]|\\,)+/g)?.reduce((old: string[][], n) => {
        let o = old
        o[o.length - 1].push(n.trim())
        if (o[o.length - 1].length >= splitPoint) {
            o.push([])
        }
        return o
    }, [[]]).map(([englishName, chineseName, cabinetName, instagramName]): School => {
        return { schoolName: { englishName, chineseName }, cabinetName, instagramName }
    }).slice(0, -1)
}