import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function () {
    return (
        <div className="bg-rice p-3 flex w-screen flex-col items-center justify-center z-40">
            <div className="flex justify-center items-center w-screen flex-col">
                <p className="text-xl font-bold mb-5">Contact Us</p>
                <div className="flex flex-row items-center justify-center gap-2">
                    <Link href="https://www.instagram.com/" target="_blank" >
                        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                        <span className="">Instagram</span>
                    </Link>
                    <div className="h-4 w-[1px] bg-rice-content" />
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <span>mc.equinoia2324@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="w-5/6 h-[1px] my-3 bg-rice-content" />
            <span className="text-sm text-rice-dark">Copyright &copy; 2023 Equinoia. All rights reserved.</span>
        </div>
    )
}