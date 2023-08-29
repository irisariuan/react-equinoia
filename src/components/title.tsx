'use client';

import { motion } from "framer-motion";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: '400', subsets: ['latin'] })
export default function () {
    return (
        <div className="flex items-center justify-center mb-6">
            <img src="school_icon.png" alt="Methodist College" className='z-0 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 mr-2' />
            <h1 className={"text-7xl md:text-9xl text-center text-gold-400/70 mr-2 "}>Equinoia</h1>
            <span className='[writing-mode:vertical-lr] text-gold-200 text-xl mt-4 sm:text-lg'>2023-2024</span>
        </div>
    )
}
