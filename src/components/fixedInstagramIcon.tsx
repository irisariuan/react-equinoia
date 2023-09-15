import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
    return (
        <a href='https://www.instagram.com/equinoia.mc/' className="bg-rice-content/60 border border-rice-dark/20 fixed bottom-0 right-0 backdrop-blur-xl rounded-full z-40 p-4 w-12 h-12 lg:w-20 lg:h-20 m-6 lg:m-8 flex justify-center items-center">
            <FontAwesomeIcon className="text-white text-xl lg:text-4xl" icon={faInstagram as IconProp} />
        </a>
    )
}