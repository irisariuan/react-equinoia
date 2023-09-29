import { motion } from "framer-motion";

export default function () {
    return (
        <motion.img animate={{ scale: [1.75, 1], opacity: [0, 1], boxShadow: ['0 0 0 rgba(247, 235, 205, 0)', '0 0 60px rgba(247, 235, 205, 1)'], filter: ['blur(10px)', 'blur(0px)'], transition: { duration: 0.5 } }} src="/icon.png" alt="Equinoia Icon" className='lg:w-2/3 sm:w-2/3 select-none absolute z-10 rounded-full border-2 border-rice-content opacity-0' />
    )
}