import Link from "next/link";

export default function ({ link, name }: { name: string, link: string }) {
    return (
        <Link href={link}>
            <div className="flex items-center justify-center [&>img]:hover:blur-xl [&>img]:hover:scale-110 bg-white overflow-hidden h-32">
                <p className="absolute z-30 lg:text-7xl text-4xl font-bold text-white">{name}</p>
                <img src="/clothes.jpg" alt="Shop" className="blur-[3px] transition-all duration-200 object-cover outline-none m-0 p-0 scale-105" />
            </div>
        </Link>
    )
}