import path from "path";
import { readSchools } from "../../lib/fs/school";
import { config } from 'dotenv'
(async () => {
    config({path: path.join(process.cwd(), '.env.development.local')})
    await readSchools().then(v => console.log(v))
})()