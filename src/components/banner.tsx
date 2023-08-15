'use client';

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function() {
    const [ad, setAd] = useState(true)
    
    return (
        <AnimatePresence>
        {ad && <motion.div className="flex bg-nav/80 backdrop-blur-lg z-40 w-screen fixed p-3 items-center" exit={{opacity: [1, 0]}}>
            <div className="flex-1">
                <p className="leading-tight p-0 m-0">Welcome to the official page of Equinoia</p>
                <span className="text-sm">Vote us in Sep!</span>
            </div>
            <button className="" onClick={() => { setAd(false) }}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
        </motion.div>}
    </AnimatePresence>
    )
}