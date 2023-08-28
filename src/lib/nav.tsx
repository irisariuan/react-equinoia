'use client'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion, useAnimate } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export interface LinkObject {
    title: string,
    content: LinkObject[] | string
}

export function isString(content: any): content is string {
    return typeof content === 'string' || content instanceof String
}

export function NormalDropdownLinks({ links, pathname }: { links: LinkObject, pathname: string }) {
    const [opened, setOpen] = useState(false)
    const [arrowRef, animate] = useAnimate()
    if (isString(links.content)) return
    console.log(links)
    return (
        <div>
            <div className="mx-2 hover:cursor-pointer hover:text-blue-500" onClick={() => { 
                setOpen(!opened)
                if (opened) {
                    animate(arrowRef.current, {rotate: ['0.5turn', '0turn']})
                    return
                }
                animate(arrowRef.current, {rotate: ['0turn', '0.5turn']})
             }}>
                <FontAwesomeIcon icon={faCaretDown} ref={arrowRef} className=""/>
                <span className="text-xl selection:bg-none m-10">{links.title}</span>
            </div>
            <AnimatePresence>
                {
                    opened && <motion.div animate={{scaleY: [0, 1]}} exit={{scaleY: [1, 0]}} className="absolute top-10 right-10 flex flex-col p-2 w-max h-max z-[120] bg-rice border border-rice-content backdrop-blur-lg rounded-xl gap-2 origin-top ">
                        {
                            links.content.map(v => {
                                if (isString(v.content)) {
                                    return (<NormalLink link={v} pathname={pathname} />)
                                }
                                return <NormalDropdownLinks links={v} pathname={pathname} />
                            })
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export function NormalLink({ link, pathname }: { link: LinkObject, pathname: string }) {
    if (!isString(link.content)) { return }
    return (<Link href={link.content} key={link.content} className={"mx-2 text-xl " + ((link.content === pathname) ? 'font-semibold ' : 'hover:text-blue-500 ')} >{link.title}</Link>)
}