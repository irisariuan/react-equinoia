import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ igName }: { igName: string }) {
    return (
        <a href={"https://instagram.com/" + igName} className="flex items-center w-max">
            <FontAwesomeIcon icon={faInstagram as IconProp} className="mr-2" />
            <span className="bg-clip-text from-orange-600 to-purple-600 bg-gradient-to-r text-transparent">
                @{igName}
            </span>
        </a>
    )
}