import NavBtn from '@/components/navbtn'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { motion } from "framer-motion"
import { Staatliches } from 'next/font/google'
import Section from '@/components/section'
import Title from "@/components/title";
config.autoAddCss = false

const staatliches = Staatliches({weight:'400', subsets:['latin']})

export default function Home() {
    const placeholder = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis enim inventore optio. Deserunt rem fuga voluptas quis nesciunt impedit saepe laboriosam eveniet, obcaecati voluptatum et sit minima consectetur unde quam veniam quia earum recusandae, cumque molestias placeat? Recusandae, libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum itaque odit rem debitis necessitatibus, rerum dicta ratione est voluptates quam doloribus tempore porro ab fugiat possimus sed, doloremque nam id atque totam dolores omnis placeat. Laborum sint quam iste veniam, harum eos sunt quisquam earum impedit, numquam, fuga perspiciatis odio atque facere repellendus facilis? Tenetur unde cumque repudiandae, doloribus cupiditate doloremque eaque excepturi repellendus molestias est vel, tempora asperiores laboriosam deleniti facilis temporibus qui necessitatibus odio fugiat pariatur. Dignissimos, ullam.'


    return (
        <main className="dark:text-white">
            <Title />
            <NavBtn link="/partnership" name='Partnership' />
        </main>
    )
}
