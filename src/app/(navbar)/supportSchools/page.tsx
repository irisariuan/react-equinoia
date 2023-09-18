import { Box } from "@/components/ui/box";
import { ListView } from "@/components/ui/list";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import { readSchoolList } from "@/lib/read/readCsv";
import { NextResponse } from "next/server";
import { SchoolListItem } from '@/components/schoolListItem'

export default async function () {
    const supportingSchools = await readSchoolList(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    if (!supportingSchools) {
        return NextResponse.error()
    }
    return (
        <div className="w-screen overflow-hidden">
            <Box>
                <ParagraphTitle>Supporting Schools</ParagraphTitle>
                <ListView>
                    {
                        supportingSchools.map((v, i) => {
                            return (
                                <SchoolListItem school={v} key={i} />
                            )
                        })
                    }
                </ListView>
            </Box>
        </div>
    )
}