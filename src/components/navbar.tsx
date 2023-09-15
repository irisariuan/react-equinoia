'use client';

import { Righteous, Noto_Sans_TC } from "next/font/google";
import NormalNav from "./nav/normalNav";
import MobileNav from "./nav/mobileNav";
import { useCallback, useEffect, useRef, useState } from "react";
import Banner from "./banner";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import { navList } from "@/lib/nav/navList";


const righteous = Righteous({ weight: '400', subsets: ['latin'] })
const chinese = Noto_Sans_TC({ weight: '700', subsets: ['latin'] })
const OFFSET_Y = 90;

export default function () {
    const [isMobile, setMobileState] = useState(true)
    const [r, animate] = useAnimate()
    const [showNav, setShowNav] = useState(true)
    const [shouldShow, setShouldShow] = useState(false)
    let [ok, setOk] = useState(false)

    let lastY = useRef(0)
    const scrollHandler = useCallback(() => {
        const { scrollY } = window;
        if (scrollY < OFFSET_Y || (lastY.current - scrollY) > OFFSET_Y) {
            lastY.current = scrollY
            setShowNav(true)
        } else if ((scrollY - lastY.current) > OFFSET_Y) {
            lastY.current = scrollY
            setShowNav(false)
        }
    }, [])

    useEffect(() => {
        lastY.current = window.scrollY
        if (shouldShow) {
            window.removeEventListener('scroll', scrollHandler)
        } else {
            window.addEventListener('scroll', scrollHandler)
        }
    }, [shouldShow])

    useEffect(() => {
        if (!showNav) {
            animate(r.current, { opacity: [1, 0], scaleY: [1, 0] })
        } else {
            animate(r.current, { opacity: [0, 1], scaleY: [0, 1] })
        }
    }, [showNav])

    const mobileHandler = useCallback(() => {
        setMobileState(window.matchMedia('(orientation: portrait)').matches)
    }, [])

    useEffect(() => {
        mobileHandler()
        window.addEventListener('resize', mobileHandler)
        window.addEventListener('scroll', scrollHandler)
        setOk(true)
        return () => {
            window.removeEventListener('resize', mobileHandler)
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div className="sticky top-0 w-screen z-50 origin-top" ref={r}>
            <div className="z-50 flex bg-nav/80 dark:bg-nav-dark/80 flex-wrap gap-2 p-2 lg:p-5 m-0 w-screen items-center dark:text-white backdrop-blur-md border-b border-rice-content/50 dark:border-white/50 ">
                <img src="/school_icon.png" alt="MCKLN icon" className="lg:h-12 lg:w-12 md:w-10 md:h-10 w-8 h-8" />
                <span className={"text-xl lg:text-3xl m-2 text-black dark:text-rice flex-1 flex items-center gap-2"}>MCKLN <div className="h-5 lg:h-7 rounded w-px bg-gold-300 inline-block" /> <Link href="/" className="text-gold-400">Equinoia 凝晞</Link></span>
                {
                    ok && (!isMobile ? (
                        <NormalNav links={navList} />
                    ) : (
                        <MobileNav links={navList} setShouldShow={setShouldShow} />
                    ))
                }
            </div>
            <Banner />
        </div>
    )
}