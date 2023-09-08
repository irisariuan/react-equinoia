import { School } from "@/lib/csv/readCsv";
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
                {
                    (school.instagramName !== 'TBC') &&
                    <div className="flex items-center justify-center">
                        <div className="mx-2 w-px h-4 bg-rice-content inline-block" />
                        <Link href={'https://www.instagram.com/' + school.instagramName} className="flex items-center">
                            <FontAwesomeIcon icon={faInstagram as IconProp} className="mr-1 text-orange-600" />
                            <span className="bg-clip-text from-orange-600 to-purple-600 bg-gradient-to-r text-transparent text-lg lg:text-xl">{school.instagramName}</span>
                        </Link>
                    </div>
                }
            </div>
        </ListItem>
    )
}