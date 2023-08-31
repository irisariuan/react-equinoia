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
                                <div className="my-1">
                                    <ListItem key={i}>
                                        <Box flexDirection="row">
                                            <Label>
                                                {v.schoolName}
                                            </Label>
                                            {(v.cabinetName !== 'UNKNOWN') && (
                                                <Box flexDirection="row" key={i}>
                                                    <div className="mx-2 w-px h-4 bg-rice-content" />
                                                    <Label>
                                                        {v.cabinetName}
                                                    </Label>
                                                </Box>
                                            )}
                                        </Box>
                                    </ListItem>
                                </div>
                            )
                        })
                    }
                </ListView>
            </Box>
        </div>
    )
}