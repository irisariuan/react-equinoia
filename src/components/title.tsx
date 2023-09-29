'use client'
import { motion } from "framer-motion";

export default function () {
    return (
        <motion.div animate={{ opacity: [0, 1], scale: [0, 1], transition: { duration: 0.6 } }} className='flex justify-center opacity-0'>
            <div className='flex flex-col justify-center items-center'>
                <div className="flex items-center justify-center mb-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center mb-4 lg:mb-8">
                            <img src="/school_icon.png" alt="Methodist College" className='z-0 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 mr-2' />
                            <h1 className="text-6xl md:text-9xl text-center text-gold-400/70 --font-playfair">Equinoia</h1>
                        </div>
                        <p className="text-gold-300 text-sm text-center">The Students' Union of Methodist College</p>
                    </div>
                    <span className='[writing-mode:vertical-lr] text-gold-200 text-xl sm:text-lg flex-1 lg:ml-4'>2023-2024</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className='text-gold-300 text-lg md:text-3xl'>Spread your wings and fly</span>
                    <span className='text-gold-300 text-lg md:text-3xl'>Equinoia raise you high</span>
                </div>
            </div>
        </motion.div>
    )
}
