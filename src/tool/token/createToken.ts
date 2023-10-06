import { readToken } from '@/lib/fs/token'
import { createHash } from 'crypto'
import { writeFileSync } from 'fs'
import { nanoid } from 'nanoid'

const token = nanoid()
let setting = readToken()
const hash = createHash('sha256').update(token).digest('hex')
setting.supportingSchools.edit.push(hash)
writeFileSync(process.cwd() + '/src/private/token.json', JSON.stringify(setting), {encoding: 'utf8'})
console.log('Token: ' + token)
console.log('Hash: ' + hash)
console.log('Please save it down as it will not be shown again')