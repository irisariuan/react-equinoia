import path from "node:path";
import { config } from 'dotenv'
import { addScool, readCsv } from "../../lib/fs/school";

config({path: path.join(process.cwd(), '.env.development.local')});

(async () => {
    const csv = readCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    console.log('Start adding schools')
    if (csv) {
        for (const school of csv) {
            const re = await addScool(school)
            process.stdout.moveCursor(0, -1)
            process.stdout.clearScreenDown()
            if (re) {
                console.log(`Added school ${school.cabinetName}, ${school.schoolName.chineseName}, ${school.schoolName.englishName}`)
            } else {
                console.log(`Something went wrong when adding school ${school.cabinetName}, ${school.schoolName.chineseName}, ${school.schoolName.englishName}`)
                console.log()
            }
        }
        console.log('Done!')
    }
})()