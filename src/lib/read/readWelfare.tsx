import { readFileSync } from "fs"

export interface WelfareStore {
    name: string,
    description: string[],
    caution: string[],
    location: string[],
    igName: string,
    isOnline: boolean,
    link?: string,
}
export function readWelfare(filename: string) : WelfareStore[] {
    const o: {store: WelfareStore[]} = JSON.parse(readFileSync(filename, {encoding: 'utf8'}))
    return o.store
}