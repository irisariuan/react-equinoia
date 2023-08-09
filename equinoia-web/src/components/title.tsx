'use client';

import { motion } from "framer-motion";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: '400', subsets: ['latin'] })
export default function () {
    return (
        <div className="bg-gradient-to-r from-cyan-400 to-yellow-400 dark:from-cyan-700 dark:to-yellow-600 overflow-hidden p-5">
            <motion.h1 initial={{ scale: 0, x: '-100%' }} animate={{ scale: 1, x: 0, zIndex: 0 }} transition={{ duration: 0.7, type: 'spring' }} whileHover={{ scale: 1.5, transition: { duration: 0.3, type: 'tween' } }} className={"text-7xl sm:text-5xl lg:text-9xl text-center text-white dark:[text-shadow:rgba(255,255,255,0.5)_0_0_20px] hover:dark:[text-shadow:rgba(255,255,255,0.8)_0_0_20px] transition-all " + staatliches.className}>Equinoia</motion.h1>
        </div>
    )
}
