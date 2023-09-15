'use client'

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAnimate } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const OFFSET_Y = 90
export default function () {
    const lastY = useRef(0)
    const [link, animate] = useAnimate()
    const [shown, setShow] = useState(true)
    const scrollHandler = useCallback(() => {
        const { scrollY } = window
        if (scrollY < OFFSET_Y || (lastY.current - scrollY) > OFFSET_Y) {
            lastY.current = scrollY
            setShow(true)
        } else if ((scrollY - lastY.current) > OFFSET_Y) {
            lastY.current = scrollY
            setShow(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    }, [])

    useEffect(() => {
        if (shown) {
            animate(link.current, { scale: [null, 1], opacity: [null, 1], x: [null, 0], y: [null, 0] }, {ease: 'easeOut', type: 'tween'})
        } else {
            animate(link.current, { scale: [null, 0.65], opacity: [null, 0.4], x: [null, 20], y: [null, 20] }, {ease: 'easeIn', type: 'tween'})
        }
    }, [shown])

    return (
        <a ref={link} href='https://www.instagram.com/equinoia.mc/' className="bg-rice-content/60 border border-rice-dark/20 fixed bottom-0 right-0 backdrop-blur-xl rounded-full z-40 p-4 w-16 h-16 lg:w-20 lg:h-20 m-6 lg:m-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-white text-3xl lg:text-4xl" icon={faInstagram as IconProp} />
        </a>
    )
}