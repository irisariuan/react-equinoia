'use client'
import { faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
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
            <div className="mx-2 flex items-center justify-center" onClick={() => {
                setOpen(!opened)
                if (opened) {
                    animate(arrowRef.current, { rotate: ['0.5turn', '0turn'] })
                    return
                }
                animate(arrowRef.current, { rotate: ['0turn', '0.5turn'] })
            }}>
                <FontAwesomeIcon icon={faCaretDown} ref={arrowRef} className="mr-2" />
                <span className="lg:text-2xl text-xl selection:bg-none hover:cursor-pointer hover:text-blue-500 ">{links.title}</span>
            </div>
            <AnimatePresence>
                {
                    opened && <motion.div animate={{ scaleY: [0, 1] }} exit={{ scaleY: [1, 0] }} className="absolute top-10 flex flex-col origin-top items-center justify-center">
                        {/* <div className="overflow-hidden z-[200]">
                            <div className="h-2 w-2 bg-rice transform rotate-45 origin-bottom-left border border-rice-content"></div>
                        </div> */}
                        <div className="flex flex-col p-2 w-max h-max z-[120] bg-rice border border-rice-content backdrop-blur-lg rounded-xl gap-2 justify-center items-center">
                            {
                                links.content.map(v => {
                                    if (isString(v.content)) {
                                        return (<NormalLink link={v} pathname={pathname} />)
                                    }
                                    return <NormalDropdownLinks links={v} pathname={pathname} />
                                })
                            }
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export function MobileDropdownLinks({ link, pathname, activeHandler }: { link: LinkObject, pathname: string, activeHandler: () => void }) {
    if (isString(link.content)) return
    const [opened, setOpen] = useState(false)
    const [arrowRef, animate] = useAnimate()

    return (
        <div>
            <div className="flex justify-center items-center" onClick={() => {
                setOpen(!opened)
                if (opened) {
                    animate(arrowRef.current, { rotate: ['0.5turn', '0turn'] })
                    return
                }
                animate(arrowRef.current, { rotate: ['0turn', '0.5turn'] })
            }}>
                <FontAwesomeIcon icon={faCaretDown} ref={arrowRef} className="mr-2" />
                <span className="text-3xl lg:text-5xl text-rice-dark dark:text-white">{link.title}</span>
            </div>
            <div>
                {opened &&
                    <motion.div animate={{ scaleY: [0, 1] }} className="origin-top">
                        {link.content.map(v => {
                            if (isString(v.content)) {
                                return <MobileLink link={v} pathname={pathname} activeHandler={activeHandler} subLink={true} />
                            }
                            return <MobileDropdownLinks link={v} pathname={pathname} activeHandler={activeHandler} />
                        })}
                    </motion.div>}
            </div>
        </div>
    )
}

export function MobileLink({ link, pathname, activeHandler, subLink = false }: { link: LinkObject, pathname: string, activeHandler: () => void, subLink?: boolean }) {
    if (!isString(link.content)) { return }
    if (subLink) {
        return (
            <Link href={link.content} className={"flex items-center justify-center m-4 lg:my-8 " + ((pathname === link.content) ? 'font-bold' : '[&>*]:hover:text-blue-500')} onClick={activeHandler}>
                {/* <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-lg lg:text-2xl lg:mr-5 text-gold-400 dark:text-rice" /> */}
                <span className={subLink ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-5xl' + " text-gold-400 dark:text-white"}>{link.title}</span>
            </Link>
        )
    }
    return (
        <motion.div key={link.content} animate={{ opacity: [0, 1], scale: [0, 1], translateY: ['-50%', '0%'], transition: { duration: 0.4 } }} transition={{ duration: 0.2 }} exit={{ scale: [1, 0] }}>
            <Link href={link.content} className={"flex items-center justify-center m-4 lg:my-8 " + ((pathname === link.content) ? 'font-bold' : '[&>*]:hover:text-blue-500')} onClick={activeHandler}>
                {/* <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-lg lg:text-2xl lg:mr-5 text-gold-400 dark:text-rice" /> */}
                <span className={subLink ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-5xl' + " text-rice-dark dark:text-white"}>{link.title}</span>
            </Link>
        </motion.div>
    )
}

export function NormalLink({ link, pathname }: { link: LinkObject, pathname: string }) {
    if (!isString(link.content)) { return }
    return (<Link href={link.content} key={link.content} className={"mx-2 text-xl lg:text-2xl " + ((link.content === pathname) ? 'font-semibold ' : 'hover:text-blue-500 ')} >{link.title}</Link>)
}