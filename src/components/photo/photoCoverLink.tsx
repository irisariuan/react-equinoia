import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import PhotoBlurred from "./photoBlurred"

export default async function ({ src, title, target }: { src: string, title: string, target: string }) {
    return (
        <div className="flex justify-center items-center flex-col w-4/5 overflow-hidden bg-rice-content rounded-lg">
            <div className="w-full h-32 md:h-64 lg:h-96 rounded-lg rounded-b-2xl overflow-hidden relative top-0 transition-all flex flex-col justify-center items-center">
                <span className="relative top-0 z-50 text-white text-2xl lg:text-6xl">{title}</span>
                <PhotoBlurred src={src} title={title} />
            </div>
            <Link href={'/photo/'+target} className="w-full">
                <div className="bg-rice-content p-2 lg:p-4 flex items-center justify-center">
                    <span className="text-lg lg:text-2xl text-gold-200">Learn More</span>
                    <FontAwesomeIcon icon={faCircleChevronRight} className="text-lg lg:text-xl text-gold-200 m-0 p-0 ml-2" />
                </div>
            </Link>
        </div>
    )
}