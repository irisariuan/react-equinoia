import { WelfareStore } from "@/lib/read/readWelfare"
import { readFileSync, readdirSync, writeFileSync } from "fs"

const result: WelfareStore[] = []

if (!readdirSync(process.cwd() + '/src/tool/welfare').includes('doc.txt')) {
    console.log('doc.txt not created, creating doc.txt...')
    writeFileSync(process.cwd() + '/src/tool/welfare/doc.txt', '')
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
    
    if (process.argv.includes('--extend')) {
        const output = JSON.stringify(result, null, 4)
        writeFileSync(process.cwd() + '/src/tool/welfare/out.txt', output)            
    } else {
        const output = JSON.stringify({ store: result }, null, 4)
        writeFileSync(process.cwd() + '/src/tool/welfare/out.txt', output)
    }
    console.log('Done!')
}