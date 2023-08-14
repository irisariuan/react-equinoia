'use client';

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars, faChevronRight, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, animate, motion, useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

export default function ({ links }: { links: string[][] }) {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    let [active, setActive] = useState(false)

    function handleDarkMode() {
        console.log('clicked')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    function activeHandler() {
        setActive(!active)
    }

    useEffect(() => {
        if (active) {
            animate('#navMobileBtn', {opacity: [1, 0]}, {duration: 0.3})
            return
        }
        animate('#navMobileBtn', {opacity: [0, 1]}, {duration: 0.3})
    }, [active])

    return (
        <div className="overflow-hidden">

            <motion.button onClick={activeHandler} className="m-4 select-none" id="navMobileBtn">
                <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </motion.button>


            <AnimatePresence>
                {active &&
                    <motion.div id="mobileMenu" className="origin-top fixed top-0 left-0 h-screen w-screen bg-rice/80 dark:bg-nav-dark/80 z-[80] backdrop-blur-3xl overflow-hidden" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} >
                        <div className="block">
                            <motion.button onClick={activeHandler} className="float-right m-4 select-none [&>*]:hover:text-rice-dark/50 dark:[&>*]:hover:text-white/50" exit={{opacity: [1, 0]}}>
                                <FontAwesomeIcon icon={faCircleXmark} className="text-3xl lg:text-4xl text-rice-dark dark:text-white" />
                            </motion.button>
                            <motion.button className="bg-white dark:bg-gray-950 duration-200 transition-all rounded-full p-2 flex justify-center items-center fixed m-4 select-none" onClick={handleDarkMode} exit={{scale: [1, 0]}}>
                                <FontAwesomeIcon icon={faCircleHalfStroke} className="text-lg lg:text-3xl" />
                            </motion.button>
                        </div>
                        <motion.div className="flex justify-center items-center flex-col mt-20 lg:mt-28">
                            {links.map(v => (
                                <motion.div animate={{y: [50, 0], opacity: [0, 1]}} transition={{duration: 0.2}} exit={{scale: [1, 0]}}>
                                    <Link key={v[1]} href={v[1]} className={"flex items-center justify-center m-4 " + ((pathname === v[1]) ? 'font-bold' : '[&>*]:hover:text-blue-500')} onClick={activeHandler}>
                                        <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-lg lg:text-2xl lg:mr-5 text-gold-400 dark:text-rice" />
                                        <span className="text-3xl lg:text-5xl text-rice-dark dark:text-white">
                                            {v[0]}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}