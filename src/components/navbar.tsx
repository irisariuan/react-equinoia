'use client';
import Link from "next/link";
import { Righteous } from "next/font/google";
import NormalNav from "./nav/normalNav";
import MobileNav from "./nav/mobileNav";
import { useEffect, useState } from "react";
import Banner from "./banner";


const righteous = Righteous({ weight: '400', subsets: ['latin'] })


export default function () {
    const [isMobile, setMobileState] = useState(true)
    let [ok, setOk] = useState(false)

    useEffect(() => {
        const f = () => {
            setMobileState(window.matchMedia('(orientation: portrait)').matches)
        }
        f()
        window.addEventListener('resize', f)
        setOk(true)
        return () => {
            window.removeEventListener('resize', f)
        }
    }, [])

    const links = [['Home', '/'], ['Contact Us', '/contact']]

    return (
        <div>
            <div className="z-50 flex sticky top-0 bg-nav/80 dark:bg-nav-dark/80 flex-wrap gap-y-4 p-2 m-0 items-center dark:text-white backdrop-blur-md border-b border-rice-content/50 dark:border-white/50">
                <span className={"text-xl m-2 text-black dark:text-rice flex-1 " + righteous.className}>MCKLN | <Link href="/">Equinoia 凝晞</Link></span>
                    {
                        ok && (!isMobile ? (
                            <NormalNav links={links} />
                        ) : (
                            <MobileNav links={links} />
                        ))
                    }
            </div>
            <Banner />
        </div>
    )
}