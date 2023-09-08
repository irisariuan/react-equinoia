import { School } from "@/lib/csv/readCsv";

export function MobileListItem({ school }: { school: School }) {
    return (
        <div className="flex items-center gap-1 my-2">
            <span className="whitespace-nowrap">
                {school.schoolName.chineseName}
            </span>
            <div className="w-px h-3 bg-rice-content" />
            {(school.cabinetName !== 'UNKNOWN') && (
                <div>
                    {school.cabinetName}
                </div>
            )}
        </div>
    )
}