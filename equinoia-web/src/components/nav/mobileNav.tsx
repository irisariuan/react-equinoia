'use client';

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars, faChevronRight, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ({ links }: { links: string[][] }) {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    let [active, setActive] = useState(false)
    let [menuRef, animateMenu] = useAnimate()
    let [menuBtnRef, animateBtn] = useAnimate()

    function handleDarkMode() {
        console.log('clicked')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    function openHandler() {
        setActive(true)
        animateMenu(menuRef.current, { scaleY: [0, 1] })
    }

    function closeHandler() {
        animateMenu(menuRef.current, { scaleY: [1, 0] }).then(() => {
            setActive(false)
        })
        animateBtn(menuBtnRef.current, { opacity: [0, 1] })
    }
    return (
        <div className="overflow-hidden">
            <div ref={menuBtnRef}>
                <button onClick={openHandler} className="m-4">
                    <FontAwesomeIcon icon={faBars} className="text-3xl" />
                </button>
            </div>

            <motion.div id="mobileMenu" ref={menuRef} className={"origin-top fixed top-0 left-0 h-screen w-screen bg-white dark:bg-nav-dark z-[80] overflow-hidden " + (active ? '' : 'hidden ')}>
                <div>
                    <button onClick={closeHandler} className="float-right m-4">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-3xl" />
                    </button>
                    <button className="bg-white dark:bg-gray-950 duration-200 transition-all hover:bg-gray-950 dark:hover:bg-white rounded-full w-8 h-8 flex justify-center items-center [&>*]:text-gray-950 [&>*]:dark:text-white [&:hover>*]:text-white [&:hover>*]:dark:text-gray-950 fixed m-4" onClick={handleDarkMode}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
                    </button>
                </div>
                <div className="flex justify-center items-center flex-col mt-20">
                    {links.map(v => (
                        <Link href={v[1]} className="flex items-center justify-center m-4" onClick={closeHandler}>
                            <FontAwesomeIcon icon={faChevronRight} className="mr-3 text-xl" />
                            <span className="text-3xl">
                                {v[0]}
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}