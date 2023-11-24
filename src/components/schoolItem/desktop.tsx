import { School } from "@/lib/fs/school";
import { Label } from "../ui/label";
import { ListItem } from "../ui/list";

export function DesktopListItem({ school }: { school: School }) {
    return (
        <ListItem>
            <div className="flex items-center my-2">
                <Label>
                    {school.schoolName.englishName.replaceAll(/(\\)(?=,)/g, '')}
                </Label>
                {(school.cabinetName !== 'UNKNOWN') && (
                    <div className="flex items-center">
                        <div className="mx-2 w-px h-4 bg-rice-content inline-block" />
                        <Label>
                            {school.cabinetName.replaceAll(/(\\)(?=,)/g, '')}
                        </Label>
                    </div>
                )}
            </div>
        </ListItem>
    )
}