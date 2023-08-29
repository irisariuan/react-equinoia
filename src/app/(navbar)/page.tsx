'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Title from "@/components/title";
import { motion } from 'framer-motion';
import { PopupContext, PopupView } from '@/lib/usePopup';
import { useContext, useEffect } from 'react';
import { Satisfy, Permanent_Marker } from 'next/font/google'
import { useTheme } from 'next-themes';

config.autoAddCss = false
const permanentMaker = Permanent_Marker({ weight: '400', subsets: ['latin'] })

export default function Home() {
    const { setTheme } = useTheme()
    setTheme('light')
    const [popupList, setPopupList] = useContext(PopupContext)
    
    return (
        <main className="dark:text-white">
            <motion.div animate={{ backgroundColor: ['rgb(253, 249, 238)', 'rgb(255,255,255)'] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} className='bg-white h-screen w-full flex justify-center items-center flex-col'>
                <motion.img animate={{ scale: [1.75, 1], opacity: [0, 1], boxShadow: ['0 0 0 rgba(247, 235, 205, 0)', '0 0 60px rgba(247, 235, 205, 1)'], filter: ['blur(150px)', 'blur(0px)'], transition: { duration: 0.5 } }} src="icon.jpg" alt="" className='lg:w-2/3 select-none absolute z-10 rounded-full border-2 border-rice-content opacity-50' />
                <div className='flex justify-center z-30 w-full'>
                    <motion.div animate={{ opacity: [0, 1], scale: [0, 1], transition: { duration: 0.6 } }} className='flex justify-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <Title />
                            <span className={' mt-4 text-gold-300 text-lg md:text-3xl'}>Spread your wings and fly</span>
                            <span className={' text-gold-300 text-lg md:text-3xl'}>Equinoia raises you high</span>
                        </div>

                    </motion.div>
                </div>
            </motion.div>
            {/* <span onClick={() => { console.log(setPopupList([{ content: 'testing', duration: 0.3, title: 'hello world' }, ...popupList])) }}>click</span> */}
        </main>
    )
}
