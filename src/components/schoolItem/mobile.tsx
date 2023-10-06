import { School } from "@/lib/read/readCsv";

export function MobileListItem({ school }: { school: School }) {
    return (
        <div className="flex items-center gap-1 my-2 w-screen overflow-x-scroll">
            <span className="whitespace-nowrap">
                {school.schoolName.chineseName}
            </span>
            {(school.cabinetName !== 'TBC') &&
                <div className="flex items-center gap-1">
                    <div className="w-px h-3 bg-rice-content" />
                    <div>
                        {school.cabinetName}
                    </div>
                    {/* {(school.instagramName === 'TBC') ?
                        (
                        ) :
                        (
                            <div>
                                <FontAwesomeIcon icon={faInstagram as IconProp} className="mr-1 text-orange-600" />
                                <Link href={'https://instagram.com/' + school.instagramName} className="bg-clip-text from-orange-600 to-purple-600 bg-gradient-to-r text-transparent">{school.cabinetName}</Link>
                            </div>
                        )} */}
                </div>
            }
        </div>
    )
}