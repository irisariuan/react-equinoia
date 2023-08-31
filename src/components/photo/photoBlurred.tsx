import Image from "next/image"

export default function ({src, title}: {src: string, title: string}) {
    return (
        <div>
            <Image src={src} alt={title} fill sizes="100%" className="object-contain z-20 brightness-90" />
            <Image src={src} alt={title} fill sizes="100%" className="object-cover object-center brightness-75 blur-2xl scale-125" />
        </div>
    )
}