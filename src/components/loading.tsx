'use client'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div animate={{rotate: ['0turn', '1turn', '0turn'], transition: {repeat: Infinity}}}>
            <FontAwesomeIcon icon={faSpinner} spin className="text-6xl m-6 text-rice-content dark:text-gold-300" />
        </motion.div>
    )
}