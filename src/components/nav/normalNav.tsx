import { NormalDropdownLinks, LinkObject, NormalLink, isString } from '@/lib/nav/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ({ links }: { links: LinkObject[] }) {
    const pathname = usePathname()

    return (
        <div className="flex flex-wrap content-center items-center justify-center">
            <div className="m-0 flex flex-wrap">
                {links.map(v => {
                    if (isString(v.content)) {
                        return (<NormalLink link={v} pathname={pathname} />)
                    }
                    return <NormalDropdownLinks links={v} pathname={pathname} />
                }
                )}
            </div>
        </div>
    )
}