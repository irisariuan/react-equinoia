'use client';
import Link from "next/link";
import { Righteous } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "next-themes";

const righteous = Righteous({ weight: '400', subsets: ['latin'] })


export default function () {
    const { theme, setTheme } = useTheme()
    
    function handleDarkMode() {
        console.log('clicked')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <div className="flex sticky top-0 bg-nav/70 dark:bg-nav-dark/70 flex-wrap p-2 m-0 items-center dark:text-white backdrop-blur-md border-b border-yellow-200/50 dark:border-white/50">
            <span className={"text-4xl m-2 flex-1 " + righteous.className}>Equinoia</span>
            <div className="flex flex-wrap content-center items-center">
                <div className="m-0 flex flex-wrap">
                    {[
                        ['Home', '/'], ['Contact Us', '/contact'], ['Partnership', '/partnership'],
                    ].map(v =>
                        <Link href={v[1]} className="m-3 hover:text-blue-800 dark:hover:text-blue-600 text-lg">{v[0]}</Link>
                    )}
                </div>
                <button className="bg-black/50 dark:bg-white/50 duration-200 transition-all hover:bg-black dark:hover:bg-white rounded-full w-8 h-8" onClick={handleDarkMode}>
                    <FontAwesomeIcon icon={faMoon} className="text-white dark:text-black" size="lg" />
                </button>
            </div>
        </div>
    )
}