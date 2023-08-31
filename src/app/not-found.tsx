import Navbar from "@/components/navbar";
import Link from "next/link";

export default function() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 justify-center content-center items-center">
                <div className="text-center flex items-center justify-center flex-col">
                <img src="icon.jpg" alt="Icon of Equinoia" className="w-1/4 z-0 rounded-full" />
                    <p className="text-3xl ">Opps! Page Not Found!</p>
                    <p>You may want to go to our <Link href="/" className="text-blue-600 hover:text-blue-800">home page</Link></p>
                </div>
            </div>
        </div>
    )
}