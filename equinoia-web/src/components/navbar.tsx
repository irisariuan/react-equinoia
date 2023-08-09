'use client';
import Link from "next/link";
import { Righteous } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation'
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const righteous = Righteous({ weight: '400', subsets: ['latin'] })


export default function () {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    
    function handleDarkMode() {
        console.log('clicked')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <div className="z-50 flex sticky top-0 bg-nav/70 dark:bg-nav-dark/70 flex-wrap gap-y-4 p-2 m-0 items-center dark:text-white backdrop-blur-md border-b border-yellow-200/50 dark:border-white/50">
            <span className={"text-4xl m-2 flex-1 text-gold-300 dark:text-rice " + righteous.className}><Link href="/">Equinoia</Link></span>
            <div className="flex flex-wrap content-center items-center justify-center">
                <div className="m-0 flex flex-wrap">
                    {[
                        ['Home', '/'], ['Contact Us', '/contact'], ['Partnership', '/partnership'],
                    ].map(v =>
                        <Link href={v[1]} key={v[1]} className={"ml-2 mr-2 text-xl " + ((v[1] === pathname) ? 'font-semibold' : 'hover:text-blue-500')} >{v[0]}</Link>
                    )}
                </div>
                <button className="bg-white dark:bg-gray-950 duration-200 transition-all hover:bg-gray-950 dark:hover:bg-white rounded-full w-8 h-8 flex justify-center items-center [&>*]:text-gray-950 [&>*]:dark:text-white [&:hover>*]:text-white [&:hover>*]:dark:text-gray-950" onClick={handleDarkMode}>
                    <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
                </button>
            </div>
        </div>
    )
}