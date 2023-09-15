'use client'
import { motion } from "framer-motion";

export default function () {
    return (
        <motion.div animate={{ opacity: [0, 1], scale: [0, 1], transition: { duration: 0.6 } }} className='flex justify-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className="flex items-center justify-center mb-6">
                    <img src="/school_icon.png" alt="Methodist College" className='z-0 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 mr-2' />
                    <div className="">
                        <h1 className={"text-7xl md:text-9xl text-center text-gold-400/70 mr-2 mb-4 "}>Equinoia</h1>
                        <span className="text-gold-300 self-start mt-2">Proposed Students' Union Candidate Cabinet No.1</span>
                    </div>
                    <span className='[writing-mode:vertical-lr] text-gold-200 text-xl mt-4 sm:text-lg'>2023-2024</span>
                </div>
                <span className={' mt-4 text-gold-300 text-lg md:text-3xl'}>Spread your wings and fly</span>
                <span className={' text-gold-300 text-lg md:text-3xl'}>Equinoia raise you high</span>
            </div>
        </motion.div>
    )
}
