import path from "node:path";
import { addScool, readCsv } from "../../lib/fs/school";
import { config } from 'dotenv'
config({path: path.join(process.cwd(), '.env.development.local')})
const csv = readCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv')
csv?.forEach(async v => console.log(await addScool(v)))