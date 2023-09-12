import { School } from "@/lib/read/readCsv";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Label } from "../ui/label";
import { ListItem } from "../ui/list";

export function DesktopListItem({ school }: { school: School }) {
    return (
        <ListItem>
            <div className="flex items-center my-2">
                <Label>
                    {school.schoolName.englishName}
                </Label>
                {(school.cabinetName !== 'UNKNOWN') && (
                    <div className="flex items-center">
                        <div className="mx-2 w-px h-4 bg-rice-content inline-block" />
                        <Label>
                            {school.cabinetName}
                        </Label>
                    </div>
                )}
            </div>
        </ListItem>
    )
}