'use client'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Title from "@/components/title";
import { motion } from 'framer-motion';
import { PopupContext, PopupView } from '@/lib/usePopup';
import { useContext, useEffect } from 'react';
import { Satisfy, Permanent_Marker } from 'next/font/google'

config.autoAddCss = false
const permanentMaker = Permanent_Marker({weight: '400', subsets: ['latin']})

export default function Home() {
    const [popupList, setPopupList] = useContext(PopupContext)
    useEffect(() => {
        //setPopupList([{ content: 'testing', duration: 0, title: 'hello world' }, ...popupList])
    }, [])
    return (
        <main className="dark:text-white">
            <motion.div animate={{ backgroundColor: ['rgb(253, 249, 238)', 'rgb(255,255,255)'] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }} className='bg-white h-screen w-full flex justify-center items-center flex-col'>
                <motion.img animate={{ scale: [0, 1], rotate: ['0turn', '1.5turn', '3turn'], boxShadow: ['0 0 0 rgba(247, 235, 205, 0)', '0 0 60px rgba(247, 235, 205, 1)'], filter: ['blur(50px)', 'blur(0px)'], transition: { duration: 0.5 } }} src="icon.jpg" alt="" className='select-none absolute z-10 rounded-full border-2 border-rice-content' />
                <div className='flex justify-center z-30 w-full'>
                    <motion.div animate={{ opacity: [0, 1], scale: [0, 1], transition: { duration: 0.6 } }} className='flex justify-center'>
                        <img src="school_icon.png" alt="" className='z-0 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 mx-5 my-2 lg:my-4' />
                        <div className='flex flex-col justify-center items-center'>
                            <Title />
                            <span className={permanentMaker.className + ' mt-4 text-gold-300 text-lg md:text-3xl'}>Spread your wings and fly</span>
                            <span className={permanentMaker.className + ' text-gold-300 text-lg md:text-3xl'}>Equinoia raises you high</span>
                        </div>
                        <span className='[writing-mode:vertical-lr] m-5 text-gold-200'>2023-2024</span>
                    </motion.div>
                </div>
            </motion.div>
            <span onClick={() => {console.log(setPopupList([{ content: 'testing', duration: 0, title: 'hello world' }, ...popupList]))}}>click</span>
        </main>
    )
}
