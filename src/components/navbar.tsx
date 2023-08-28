'use client';
import { Righteous, Noto_Sans_TC } from "next/font/google";
import NormalNav from "./nav/normalNav";
import MobileNav from "./nav/mobileNav";
import { useCallback, useEffect, useRef, useState } from "react";
import Banner from "./banner";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { LinkObject } from "@/lib/nav";
import Link from "next/link";


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

    const links: LinkObject[] = [{title: 'Home', content: '/'}, {title: 'About Us', content: '/about'}, {title: 'Election Platform', content: [
        {title: 'Internal Activities', content: '/internal'}, {title: 'External Activites', content: '/external'}, {title: 'Welfare', content: '/welfare'}, {title: 'Policies', content: '/policy'}, {title: 'testing', content: [{title: 'hello', content: ''}]}]
        }, {title: 'Supporting Schools', content: '/support'}, {title: 'Photos', content: '/photo'}]

    return (
        <div className="sticky top-0 w-screen z-50 origin-top" ref={r}>
            <div className="z-50 flex bg-nav/80 dark:bg-nav-dark/80 flex-wrap gap-2 p-2 lg:p-5 m-0 w-screen items-center dark:text-white backdrop-blur-md border-b border-rice-content/50 dark:border-white/50 ">
                <img src="school_icon.png" alt="" className="h-10 w-10 lg:h-12 lg:w-12" />
                <span className={"text-xl lg:text-3xl m-2 text-black dark:text-rice flex-1 "}>MCKLN | <Link href="/">Equinoia <span className={chinese.className}>凝晞</span></Link></span>
                {
                    ok && (!isMobile ? (
                        <NormalNav links={links} />
                    ) : (
                        <MobileNav links={links} setShouldShow={setShouldShow} />
                    ))
                }
            </div>
            <Banner />
        </div>
    )
}