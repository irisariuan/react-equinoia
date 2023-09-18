'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Title from "@/components/title";
import IconBackground from '@/components/iconBackground';

config.autoAddCss = false
export default function Home() {
    // const [popupList, setPopupList] = useContext(PopupContext)
    
    // useEffect(() => {
    //     setPopupList([{content: 'hello world', title: 'title', duration: 0}])
    // }, [])

    return (
        <main className="dark:text-white">
            <div className='bg-white h-screen w-full flex justify-center items-center flex-col'>
                <IconBackground />
                <div className='flex justify-center z-30 w-full'>
                    <Title />
                </div>
            </div>
            {/* <span onClick={() => { console.log(setPopupList([{ content: 'testing', duration: 0.3, title: 'hello world' }, ...popupList])) }}>click</span> */}
        </main>
    )
}
