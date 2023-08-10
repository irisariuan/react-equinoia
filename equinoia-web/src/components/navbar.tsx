'use client';
import Link from "next/link";
import { Righteous } from "next/font/google";
import NormalNav from "./nav/normalNav";
import MobileNav from "./nav/mobileNav";


const righteous = Righteous({ weight: '400', subsets: ['latin'] })


export default function () {
    const isMobile = true
    const links = [['Home', '/'], ['Contact Us', '/contact'], ['Partnership', '/partnership']]
    
    return (
        <div className="z-50 flex sticky top-0 bg-nav/70 dark:bg-nav-dark/70 flex-wrap gap-y-4 p-2 m-0 items-center dark:text-white backdrop-blur-md border-b border-yellow-200/50 dark:border-white/50">
            <span className={"text-4xl m-2 text-gold-300 dark:text-rice flex-1 " + righteous.className}><Link href="/">Equinoia</Link></span>
            <div>
            {
                !isMobile ? (
                    <NormalNav links={links} />
                ) : (
                    <MobileNav links={links} />
                )
            }
            </div>
        </div>
    )
}