import { readFileSync, writeFileSync } from "fs"
interface WelfareStore {
    name: string,
    description: string[],
    caution: string[],
    location: string[],
    link?: string,
    igName?: string,
    isOnline: boolean
}
const result: WelfareStore[] = []
const f = readFileSync(process.cwd() + '/src/tool/welfare/doc.txt', {encoding: 'utf-8'})
for (const i of f.replace(/\r/g, '').split('\n').filter(v => !!v).map(v => v.trim())) {
    const ri = i.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '').trim()
    if (i.startsWith('🦊')) {
        const [name, igName] = ri.split('@').map(v => v.trim())
        result.push({
            name,
            igName: igName,
            caution: [],
            description: [],
            location: [],
            isOnline: true,
        })
    } else if (i.startsWith('👉')) {
        result[result.length - 1].description.push(ri)
    } else if (i.startsWith('❗️')) {
        result[result.length - 1].caution.push(ri)
    } else if (i.startsWith('📍')) {
        result[result.length - 1].isOnline = false
        result[result.length - 1].location.push(ri)
    } else if (i.startsWith('📎')) {
        result[result.length - 1].link = ri
    }
}
const output = JSON.stringify({store: result}, null, 4)
console.log(output)
writeFileSync(process.cwd() + '/src/tool/welfare/out.txt', output)