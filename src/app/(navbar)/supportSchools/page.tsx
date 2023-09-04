import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { ListItem, ListView } from "@/components/ui/list";
import { ParagraphContent } from "@/components/ui/paragraph/content";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import { readCsv } from "@/lib/csv/readCsv";

export default function () {
    const supportingSchools = readCsv(process.cwd() + '/src/private/supportingSchoolList.csv')
    return (
        <div>
            <Box>
                <ParagraphTitle>Supporting Schools</ParagraphTitle>
                    <ListView>
                        {
                            supportingSchools.map((v, i) => {
                                return (
                                    <ListItem key={i}>
                                        <Label>
                                            {v.schoolName}
                                        </Label>
                                        {(v.cabinetName !== 'UNKNOWN') && (
                                            <div className="inline-block">
                                                <div className="mx-2 w-px h-4 bg-rice-content inline-block" />
                                                <Label>
                                                    {v.cabinetName}
                                                </Label>
                                            </div>
                                        )}
                                    </ListItem>
                                )
                            })
                        }
                    </ListView>
            </Box>
        </div>
    )
}