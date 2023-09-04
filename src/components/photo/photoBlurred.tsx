import Image from "next/image"

export default function ({src, title}: {src: string, title: string}) {
    return (
        <div className="relative top-0 w-full h-full flex flex-col items-center justify-center">
            <span className="z-50 text-white text-2xl lg:text-6xl">{title}</span>
            <Image src={src} alt={title} fill sizes="100%" className="object-contain z-20 brightness-90" />
            <Image src={src} alt={title} fill sizes="100%" className="object-cover object-center brightness-75 blur-2xl scale-125" />
        </div>
    )
}