import { PathLike, readFileSync } from "fs";

interface School {
    schoolName: string,
    cabinetName: string
}
export function readCsv(filename: string): School[] {
    return readFileSync(filename, {encoding: 'utf-8'}).replaceAll('\n', ',').replaceAll('\r', '').split(',').reduce((old: string[][], n) => {
        let o = old
        o[o.length - 1].push(n)
        if (o[o.length - 1].length >= 2) {
            o.push([])
        }
        return o
    }, [[]]).map(([schoolName, cabinetName]): School => {return {schoolName, cabinetName}}).slice(0, -1)
}