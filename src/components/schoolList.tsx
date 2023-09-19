import { readSchoolList } from "@/lib/read/readCsv"
import { SchoolListItem } from "./schoolListItem"
import { ListView } from "./ui/list"

export default async function SchoolList() {
    const supportingSchools = await readSchoolList(process.cwd() + '/src/private/newSupportingSchoolList.csv')

    return (
        <ListView>
            {
                supportingSchools?.map((v, i) => {
                    return (
                        <SchoolListItem school={v} key={i} />
                    )
                })
            }
        </ListView>
    )
}