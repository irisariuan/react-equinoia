'use client';

import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function () {
    const {theme, setTheme} = useTheme()
    
    return (
        <motion.button className="bg-white dark:bg-gray-950 duration-200 transition-all rounded-full p-2 flex justify-center items-center fixed m-4 select-none" onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}} exit={{ scale: [1, 0] }} transition={{ duration: 0.2 }}>
            <FontAwesomeIcon icon={faCircleHalfStroke} className="text-lg lg:text-3xl" />
        </motion.button>
    )
}