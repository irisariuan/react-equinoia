import { WelfareStore } from "@/lib/read/readWelfare"
import { readFileSync, readdirSync, writeFileSync } from "fs"

const result: WelfareStore[] = []

if (!readdirSync(process.cwd() + '/src/tool/welfare').includes('doc.txt')) {
    console.log('doc.txt not created, creating doc.txt...')
    writeFileSync(process.cwd() + '/src/tool/welfare/doc.txt', '')
} else if (process.argv.filter(v => v.startsWith('--filename=')).length !== 1) {
    console.log('Please provide one argument (example: --filename=test.json)')
} else {
    const f = readFileSync(process.cwd() + '/src/tool/welfare/doc.txt', { encoding: 'utf-8' })

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
        } else if (i.startsWith('📞')) {
            result[result.length - 1].phoneNo = ri.replaceAll(' ', '')
        } else if (i.startsWith('🌗')) {
            if (!result[result.length - 1].tip) {
                result[result.length - 1].tip = []
            }
            result[result.length - 1].tip?.push(ri)
        }
    }
    const argument = process.argv.filter(v => v.startsWith('--filename='))[0].split('=')[1]
    const filepath = process.cwd() + (argument.startsWith('/') ? argument : argument.slice(1))
    const original: { store: WelfareStore[] } = JSON.parse(readFileSync(filepath, { encoding: 'utf8' }))
    original.store.push(...result)
    const output = JSON.stringify(original, null, 4)
    writeFileSync(filepath, output)

    console.log('Done!')
}