import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Staatliches } from 'next/font/google'
import Title from "@/components/title";
import {LoremIpsum} from 'lorem-ipsum';
import Section from '@/components/section';

config.autoAddCss = false
const staatliches = Staatliches({ weight: '400', subsets: ['latin'] })
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 40,
        min: 10
    },
    wordsPerSentence: {
        max: 16,
        min: 6
    }
})

export default function Home() {

    return (
        <main className="dark:text-white bg-white">
            <div className='h-screen w-screen flex justify-center items-center flex-col'>
                <img src="icon.jpg" alt="" className='absolute z-10 rounded-full' />
                <div className='flex justify-center z-30 w-full'>
                    <div className='flex justify-center'>
                        <img src="school_icon.png" alt="" className='z-0 h-12 w-12 lg:h-24 lg:w-24 mx-5 my-2 lg:my-4' />
                        <div className='flex flex-col justify-center items-center'>
                        <Title />
                        <span className='mt-4 text-gold-300 lg:text-2xl'>Spread your wings and fly</span>
                        <span className='text-gold-300 lg:text-2xl'>Equinoia raises you high</span>
                        </div>
                        <span className='[writing-mode:vertical-lr] m-5 text-gold-200'>2023-2024</span>
                    </div>
                </div>
            </div>
            
        </main>
    )
}
