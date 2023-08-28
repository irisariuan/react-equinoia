import Link from "next/link"

export interface LinkObject {
    title: string,
    content: LinkObject[] | string
}

export function isString(content: any): content is string {
    return content instanceof String
}

export function DropdownLinks({links}: {links: LinkObject[]}) {
    return (
        links
    )
}

export function NormalLink({link, pathname}: {link: LinkObject, pathname: string}) {
    if (!isString(link.content)) {return}
    return (<Link href={link.content} key={link.content} className={"ml-2 mr-2 text-xl " + ((link.content === pathname) ? 'font-semibold ' : 'hover:text-blue-500 ')} >{link.title}</Link>)
}