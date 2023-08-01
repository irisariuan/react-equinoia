import Link from "next/link"

export default function Home() {
    return (
        <main>
            <h1>
                <Link href="/test">Hello world</Link>
            </h1>
        </main>
    )
}
