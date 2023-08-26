import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function ({ links }: { links: string[][] }) {
    const pathname = usePathname()

    return (
        <div className="flex flex-wrap content-center items-center justify-center">
            <div className="m-0 flex flex-wrap">
                {links.map((v, i) =>
                    <Link href={v[1]} key={v[1]} className={"ml-2 mr-2 text-xl " + ((v[1] === pathname) ? 'font-semibold ' : 'hover:text-blue-500 ')} >{v[0]}</Link>
                )}
            </div>
        </div>
    )
}