import { Box } from "@/components/ui/box";
import { ListView } from "@/components/ui/list";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import { readSchools } from "@/lib/fs/school";
import { NextResponse } from "next/server";
import { SchoolListItem } from '@/components/schoolListItem'
import { Suspense } from "react";

export default async function () {
    const supportingSchools = await readSchools()
    if (!supportingSchools) {
        return NextResponse.error()
    }
    return (
        <div className="w-screen overflow-hidden">
            <Box>
                <ParagraphTitle>Supporting Schools</ParagraphTitle>
                <ListView>
                    <Suspense fallback={<p>Loading Supporting Schools...</p>}>
                        {
                            supportingSchools.map((v, i) => {
                                return (
                                    <SchoolListItem school={v} key={i} />
                                )
                            })
                        }
                    </Suspense>
                </ListView>
            </Box>
        </div>
    )
}