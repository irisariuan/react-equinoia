'use client'

import { School } from "@/lib/fs/csv"
import { useSize } from "@/lib/useSize"
import { DesktopListItem } from "./schoolItem/desktop"
import { MobileListItem } from "./schoolItem/mobile"

export function SchoolListItem({school} : {school: School}) {
    const isMobile = useSize()
    return (isMobile ? (<MobileListItem school={school} />) : (<DesktopListItem school={school} />))
        
}