import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { ListItem, ListView } from "@/components/ui/list";
import { ParagraphContent } from "@/components/ui/paragraph/content";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import { readCsv } from "@/lib/csv/readCsv";
import { useSize } from "@/lib/useSize";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NextResponse } from "next/server";

export default function () {
    const supportingSchools = readCsv(process.cwd() + '/src/private/newSupportingSchoolList.csv')
    if (!supportingSchools) {
        return NextResponse.error()
    }
    return (
        <div>
            <Box>
                <ParagraphTitle>Supporting Schools</ParagraphTitle>
                <ListView>
                    {
                        supportingSchools.map((v, i) => {
                            return (
                                
                            )
                        })
                    }
                </ListView>
            </Box>
        </div>
    )
}