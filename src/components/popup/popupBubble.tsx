'use client'

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ({ title, content, duration, icon, initial = true, customState }: { title: string, content: string, duration: number, icon?: IconProp, initial?: boolean, customState?: boolean }) {
    let setShow: Dispatch<SetStateAction<boolean>>
    let show: boolean = false
    if (customState === undefined) {
        [show, setShow] = useState(initial)
        useEffect(() => {
            if (duration <= 0) {
                return
            }
            const t = setTimeout(() => {
                setShow(!show)
            }, duration * 1000 + 300)
    
            return () => {
                clearInterval(t)
            }
        }, [])
    }
    return (
        <AnimatePresence>
            {(customState || show) && <motion.div exit={{ translateY: ['0%', '-20%'], scale: [1, 0.9], opacity: [1, 0], transition: { duration: 0.25 } }} animate={{ translateY: ['70%', '0%'], scale: [0.8, 1], opacity: [0, 1], transition: { duration: 0.3 } }} className="rounded-full bg-rice-content/80 backdrop-blur-2xl border border-rice-dark/20 flex justify-center items-center w-max py-2 px-8 gap-4 z-[100]">
                {icon && <FontAwesomeIcon className="text-rice-dark" size="2xl" icon={icon} />}
                <div className="flex flex-col items-center">                    
                <span className="text-gold-300 font-bold text-lg">{title}</span>
                <span className="text-gold-200">{content}</span>
                </div>
            </motion.div>}
        </AnimatePresence>
    )
}