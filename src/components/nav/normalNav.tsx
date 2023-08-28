import { LinkObject, NormalLink, isString } from '@/lib/nav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ({ links }: { links: LinkObject[] }) {
    const pathname = usePathname()

    return (
        <div className="flex flex-wrap content-center items-center justify-center">
            <div className="m-0 flex flex-wrap">
                {links.map((v, i) =>
                    {
                        if (isString(v.content)) {
                            return (<NormalLink link={v} pathname={''} />)
                        }
                        return 
                    }
                )}
            </div>
        </div>
    )
}