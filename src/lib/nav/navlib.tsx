'use client'
import { faCaretDown, faCaretUp, faChevronRight } from "@fortawesome/free-solid-svg-icons"
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

function isSublink(links: LinkObject[], pathname: string): boolean {
    for (const link of links) {
        if (isString(link.content)) {
            if (link.content === pathname) {
                return true
            }
        } else {
            isSublink(link.content, pathname)
        }
    }
    return false
}

export function MobileDropdownLinks({ link, pathname, activeHandler, subLink = false, delay = 0 }: { link: LinkObject, pathname: string, activeHandler: () => void, subLink?: boolean, delay?: number }) {
    if (isString(link.content)) return
    const [opened, setOpen] = useState(false)
    const [arrowRef, animate] = useAnimate()

    return (
        <motion.div exit={{ scale: [1, 0] }} animate={{ opacity: [0, 1], scale: [0, 1], translateY: ['-50%', '0%'], transition: { duration: 0.4, delay: delay * 0.08 } }} className="m-4 lg:my-8">
            <div className="flex justify-center items-center" onClick={() => {
                setOpen(!opened)
                if (opened) {
                    animate(arrowRef.current, { rotate: ['0.5turn', '0turn'] })
                    return
                }
                animate(arrowRef.current, { rotate: ['0turn', '0.5turn'] })
            }}>
                <FontAwesomeIcon icon={faCaretDown} ref={arrowRef} className="mr-2" />
                <span className={subLink ? 'text-2xl lg:text-3xl font-semibold' : 'text-3xl lg:text-5xl' + ((!opened && isSublink(link.content, pathname)) ? ' font-bold' : '') + " text-rice-dark dark:text-white"}>{link.title}</span>
            </div>
            <div>
                <AnimatePresence>
                    {opened &&
                        <motion.div animate={{ scaleY: [0, 1] }} exit={{ scaleY: [1, 0], height: [null, 0] }} className="origin-top">
                            {link.content.map((v, i) => {
                                if (isString(v.content)) {
                                    return <MobileLink link={v} pathname={pathname} activeHandler={activeHandler} subLink={true} delay={i} key={i} />
                                }
                                return <MobileDropdownLinks link={v} pathname={pathname} activeHandler={activeHandler} subLink={true} key={i} />
                            })}
                        </motion.div>}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export function MobileLink({ link, pathname, activeHandler, subLink = false, delay = 0 }: { link: LinkObject, pathname: string, activeHandler: () => void, subLink?: boolean, delay?: number }) {
    if (!isString(link.content)) { return }
    if (subLink) {
        return (
            <motion.div animate={{ opacity: [0, 1], scaleY: [0, 1], transition: { duration: 0.15, delay: delay * 0.12, ease: 'easeIn' } }} initial={{ transformOrigin: 'bottom' }}>
                <Link href={link.content} className={"flex items-center justify-center m-4 lg:my-8 " + ((pathname === link.content) ? 'font-bold' : '[&>*]:hover:text-blue-500')} onClick={activeHandler}>
                    {/* <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-lg lg:text-2xl lg:mr-5 text-gold-400 dark:text-rice" /> */}
                    <span className={subLink ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-5xl' + " text-gold-400 dark:text-white"}>{link.title}</span>
                </Link>
            </motion.div>
        )
    }
    return (
        <motion.div key={link.content} animate={{ opacity: [0, 1], scale: [0, 1], translateY: ['-50%', '0%'], transition: { duration: 0.4, delay: delay * 0.08 } }} transition={{ duration: 0.2 }} exit={{ scale: [1, 0] }}>
            <Link href={link.content} className={"flex items-center justify-center m-4 lg:my-8 " + ((pathname === link.content) ? 'font-bold' : '[&>*]:hover:text-blue-500')} onClick={activeHandler}>
                {/* <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-lg lg:text-2xl lg:mr-5 text-gold-400 dark:text-rice" /> */}
                <span className={subLink ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-5xl' + " text-rice-dark dark:text-white"}>{link.title}</span>
            </Link>
        </motion.div>
    )
}

export function NormalDropdownLinks({ links, pathname, customHandler }: { links: LinkObject, pathname: string, customHandler?: () => void }) {
    const [opened, setOpen] = useState(false)
    const [arrowRef, animate] = useAnimate()
    const clickHandler = () => {
        if (customHandler !== undefined) {
            customHandler()
        }
        setOpen(!opened)
        if (opened) {
            animate(arrowRef.current, { rotate: ['0.5turn', '0turn'] })
            return
        }
        animate(arrowRef.current, { rotate: ['0turn', '0.5turn'] })
    }
    if (isString(links.content)) return

    return (
        <div className="flex flex-col items-center">
            <button className="mx-2 flex items-center justify-center" onClick={clickHandler}>
                <FontAwesomeIcon icon={faCaretDown} ref={arrowRef} className="mr-2" />
                <span className="lg:text-2xl text-xl selection:bg-none hover:cursor-pointer hover:text-blue-500 ">{links.title}</span>
            </button>
            <AnimatePresence>
                {
                    opened && <motion.div animate={{ scaleY: [0, 1] }} exit={{ scaleY: [1, 0] }} className="absolute top-20 flex flex-col origin-top items-center justify-center">
                        {/* <div className="overflow-hidden z-[200]">
                            <div className="h-2 w-2 bg-rice transform rotate-45 origin-bottom-left border border-rice-content"></div>
                        </div> */}
                        <div className="flex flex-col p-2 w-max h-max z-[200] bg-rice border border-rice-content rounded-xl gap-2 justify-center items-center">
                            <motion.button animate={{ rotate: ['0.5turn', '0turn'] }} title="Back" onClick={clickHandler} className="h-full">
                                <FontAwesomeIcon icon={faCaretUp} />
                            </motion.button>
                            {
                                links.content.map(v => {
                                    if (isString(v.content)) {
                                        return (<NormalLink link={v} pathname={pathname} customHandler={() => {setOpen(false)}} />)
                                    }
                                    return <NormalDropdownLinks links={v} pathname={pathname} customHandler={() => {setOpen(false)}} />
                                })
                            }
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export function NormalLink({ link, pathname, customHandler }: { link: LinkObject, pathname: string, customHandler?: () => void }) {
    if (!isString(link.content)) { return }
    return (<Link href={link.content} key={link.content} className={"mx-2 text-xl lg:text-2xl " + ((link.content === pathname) ? 'font-bold ' : 'hover:text-blue-500 ')} onClick={customHandler} >{link.title}</Link>)
}