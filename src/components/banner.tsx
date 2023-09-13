'use client';

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function() {
    const [ad, setAd] = useState(false)
    useEffect(() => {
        const i = localStorage.getItem('bannerClosed')
        if (i !== null) {
            if (i === 'true') {
                setAd(false)
            } else {
                setAd(true)
            }
            return
        }
        localStorage.setItem('bannerClosed', 'false')
        setAd(true)
        
    }, [])

    useEffect(() => {
        localStorage.setItem('bannerClosed', ad ? 'false' : 'true')
    }, [ad])

    return (
        <AnimatePresence>
        {ad && <motion.div className="flex bg-nav/80 dark:bg-nav-dark/80 border-b border-rice-content/50 dark:border-white/50 backdrop-blur-lg -z-10 w-screen sticky p-3 items-center" exit={{opacity: [1, 0]}}>
            <div className="flex-1 mx-2">
                <p className="leading-tight p-0 m-0 sm:text-lg">Welcome to the official page of proposed Students' Union Candidate Cabinet No.1 Equinoia</p>
                <span className="text-sm">Vote us on Sep 29!</span>
            </div>
            <button className="" onClick={() => { setAd(false) }} title="Close">
                <FontAwesomeIcon className="text-xl" icon={faCircleXmark} />
            </button>
        </motion.div>}
    </AnimatePresence>
    )
}