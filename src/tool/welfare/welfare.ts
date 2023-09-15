import { WelfareStore } from "@/lib/read/readWelfare"
import { exec } from "child_process"
import { access, accessSync, constants, readFileSync, readdirSync, watch, watchFile, writeFileSync } from "fs"

const result: WelfareStore[] = []

if (!readdirSync(process.cwd() + '/src/tool/welfare').includes('doc.txt')) {
    await (async () => {
        writeFileSync(process.cwd() + '/src/tool/welfare/doc.txt', '', {encoding: 'utf8'})
        await new Promise((resolve, reject) => exec('code ' + process.cwd() + '/src/tool/welfare/doc.txt', (error, stdout, stderr) => {
            if (error) {
                return reject(error)
            }
            setInterval(() => resolve(stdout), 1000)
        }))
        loop1: while (true) {
            try {
                accessSync(process.cwd() + '/src/tool/welfare/doc.txt', constants.R_OK | constants.W_OK)
                console.log('ok')
                break loop1
            } catch (error) {
                console.log(error)
            }
        }
    })()
}

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