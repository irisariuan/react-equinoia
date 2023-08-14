import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation'
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ({links}: {links: string[][]}) {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    function handleDarkMode() {
        console.log('clicked')
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <div className="flex flex-wrap content-center items-center justify-center">
            <div className="m-0 flex flex-wrap">
                {links.map((v, i) =>
                    <Link href={v[1]} key={v[1]} className={"ml-2 mr-2 text-xl " + ((v[1] === pathname) ? 'font-semibold ' : 'hover:text-blue-500 ')} >{v[0]}</Link>
                )}
            </div>
            <button className="bg-white dark:bg-gray-950 duration-200 transition-all hover:bg-gray-950 dark:hover:bg-white rounded-full w-8 h-8 flex justify-center items-center [&>*]:text-gray-950 [&>*]:dark:text-white [&:hover>*]:text-white [&:hover>*]:dark:text-gray-950" onClick={handleDarkMode}>
                <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
            </button>
        </div>
    )
}