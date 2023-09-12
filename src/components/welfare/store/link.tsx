import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import link from "next/link";

export function StoreLink({ link }: { link: string }) {
    return (
        <a href={link.startsWith('https://') ? link : ('https://' + link)} className="flex items-center">
            <FontAwesomeIcon icon={faLink} className="mr-2 text-blue-500" />
            <div className="w-full overflow-x-auto">
                <span className="text-blue-500 underline">
                    {link}
                </span>
            </div>
        </a>
    )
}