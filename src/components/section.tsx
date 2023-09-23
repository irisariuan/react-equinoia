'use client';

import { motion } from "framer-motion"

export default function({title, children} : {title: string, children: React.ReactNode}) {
    return (
        <motion.div whileInView={{opacity: 1, y: 0, zIndex: 0}} initial={{opacity: 0, y: '-20%'}} viewport={{once: true}} transition={{duration: 0.8, type: 'spring', delay: 0.2}}  className="z-50 text-rice-dark p-3 box-content bg-rice rounded-2xl m-3 ">
            <div className="h-60 overflow-auto rounded-xl">
                <h1 className="pl-5 pr-5 pb-2 mb-6 text-4xl font-bold text-gold-300 sticky top-0 bg-rice ">{title}</h1>
                <div className="ml-5 m-2 flex flex-row">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}