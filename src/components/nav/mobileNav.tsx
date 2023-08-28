'use client';

import { LinkObject, MobileDropdownLinks, MobileLink, isString } from "@/lib/nav";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, animate, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

export default function ({ links, setShouldShow }: { links: LinkObject[], setShouldShow: Dispatch<SetStateAction<boolean>> }) {
    const pathname = usePathname()
    let [active, setActive] = useState(false)

    function activeHandler() {
        setActive(!active)
    }

    useEffect(() => {
        if (active) {
            animate('#navMobileBtn', { opacity: [1, 0] }, { duration: 0.3 })
            setShouldShow(true)
            
            return
        }
        animate('#navMobileBtn', { opacity: [0, 1] }, { duration: 0.3 })
        
        setShouldShow(false)
    }, [active])

    return (
        <div className="overflow-hidden">

            <motion.button onClick={activeHandler} className="mx-4 select-none outline-none" id="navMobileBtn" animate={{ transition: { duration: 0.3 }, opacity: [0, 1] }}>
                <FontAwesomeIcon icon={faBars} className="text-2xl lg:text-4xl text-rice-dark dark:text-white" />
            </motion.button>


            <AnimatePresence>
                {active &&
                    <motion.div id="mobileMenu" className="origin-top fixed top-0 left-0 h-screen w-screen bg-rice/80 dark:bg-nav-dark/80 z-[80] backdrop-blur-3xl overflow-hidden" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.3 }} >
                        <div className="flex items-center justify-end">
                            <motion.button onClick={activeHandler} className="m-4 select-none [&>*]:hover:text-rice-dark/50 dark:[&>*]:hover:text-white/50 outline-none" exit={{ opacity: [1, 0], scaleY: [1, 0], scaleX: [1, 5] }}>
                                <FontAwesomeIcon icon={faCircleXmark} className="text-3xl lg:text-4xl text-rice-dark dark:text-white" />
                            </motion.button>
                        </div>
                        <motion.div className="flex justify-center items-center flex-col">
                            {links.map(v => {
                                if (isString(v.content)) {
                                    return <MobileLink activeHandler={activeHandler} link={v} pathname={pathname} />
                                }
                                return <MobileDropdownLinks activeHandler={activeHandler} link={v} pathname={pathname} />
                            })}
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}