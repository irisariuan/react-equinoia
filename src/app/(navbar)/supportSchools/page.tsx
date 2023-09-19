import { Box } from "@/components/ui/box";
import { ListView } from "@/components/ui/list";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import { readSchoolList } from "@/lib/read/readCsv";
import { NextResponse } from "next/server";
import { SchoolListItem } from '@/components/schoolListItem'
import { Suspense } from "react";
import SchoolList from "@/components/schoolList";
import Loading from "@/components/loading";

export default async function () {
    return (
        <div className="w-screen overflow-hidden">
            <Box>
                <ParagraphTitle>Supporting Schools</ParagraphTitle>
                <Suspense fallback={<Loading />}>
                    <SchoolList />
                </Suspense>
            </Box>
        </div>
    )
}