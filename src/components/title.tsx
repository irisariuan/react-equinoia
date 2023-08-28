'use client';

import { motion } from "framer-motion";
import { Staatliches } from "next/font/google";

const staatliches = Staatliches({ weight: '400', subsets: ['latin'] })
export default function () {
    return (
        <h1 className={"text-7xl sm:text-5xl md:text-9xl text-center text-gold-400/70 " + staatliches.className}>Equinoia</h1>
    )
}
