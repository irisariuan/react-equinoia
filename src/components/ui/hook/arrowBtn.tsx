'use client'

import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useAnimate } from "framer-motion"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function ArrowButton({opened, setOpen, className = ''}: {opened: boolean, setOpen: Dispatch<SetStateAction<boolean>>, className?: string}) {
    const [ref, animate] = useAnimate()
    function turn() {
        setOpen(!opened)
    }
    useEffect(() => {
        if (opened) {
            animate(ref.current, {rotate: [null, '0.5turn']})
        } else {
            animate(ref.current, {rotate: [null, '0turn']})
        }
    }, [opened])
    return <>
        <motion.button className={className} animate={{ rotate: ['0.5turn', '0turn'], opacity: [0, 1] }} title="Open" type="button" ref={ref} onClick={turn}>
            <FontAwesomeIcon icon={faCaretDown} />
        </motion.button>
    </>
}
