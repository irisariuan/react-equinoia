'use client';

import Link from "next/link"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion } from "framer-motion"
import { Staatliches } from 'next/font/google'
import Section from '@/components/section'
config.autoAddCss = false

const staatliches = Staatliches({weight:'400', subsets:['latin']})

export default function Home() {
    const placeholder = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis enim inventore optio. Deserunt rem fuga voluptas quis nesciunt impedit saepe laboriosam eveniet, obcaecati voluptatum et sit minima consectetur unde quam veniam quia earum recusandae, cumque molestias placeat? Recusandae, libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque odit rem debitis necessitatibus, rerum dicta ratione est voluptates quam doloribus tempore porro ab fugiat possimus sed, doloremque nam id atque totam dolores omnis placeat. Laborum sint quam iste veniam, harum eos sunt quisquam earum impedit, numquam, fuga perspiciatis odio atque facere repellendus facilis? Tenetur unde cumque repudiandae, doloribus cupiditate doloremque eaque excepturi repellendus molestias est vel, tempora asperiores laboriosam deleniti facilis temporibus qui necessitatibus odio fugiat pariatur. Dignissimos, ullam.'


    return (
        <main className="dark:text-white">
            <div className="bg-gradient-to-r from-cyan-400 to-yellow-400 dark:from-cyan-700 dark:to-yellow-600 overflow-hidden p-5">
                <motion.h1 initial={{scale: 0, x: '-100%'}} animate={{scale: 1, x: 0, zIndex: 0}} transition={{duration: 0.7, type: 'spring'}} whileHover={{scale: 1.5}} className={"text-7xl sm:text-5xl lg:text-9xl text-center text-white dark:[text-shadow:rgba(255,255,255,0.5)_0_0_20px] hover:dark:[text-shadow:rgba(255,255,255,0.8)_0_0_20px] transition-all " + staatliches.className}>Equinoia</motion.h1>
            </div>
            <Section title="Why Equinoia?">
                <p>{placeholder}</p>
                <img src="office_man.jpg" alt="" className="w-52 h-52 float-right rounded-full" />
            </Section>
            <Section title="Why Equinoia?">
                <p>{placeholder}</p>
                <img src="office_man.jpg" alt="" className="w-52 h-52 float-right rounded-full" />
            </Section>
            <Section title="Why Equinoia?">
                <p>{placeholder}</p>
                <img src="office_man.jpg" alt="" className="w-52 h-52 float-right rounded-full" />
            </Section>
            <Section title="Why Equinoia?">
                <p>{placeholder}</p>
                <img src="office_man.jpg" alt="" className="w-52 h-52 float-right rounded-full" />
            </Section>
        </main>
    )
}
