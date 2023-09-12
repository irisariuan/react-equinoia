import { WelfareStore } from "@/lib/read/readWelfare";
import Link from "next/link";
import { Box } from "../ui/box";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faShopSlash } from "@fortawesome/free-solid-svg-icons/faShopSlash";

export default function ({ name, igName, description, caution, location, link, isOnline }: WelfareStore) {
    return (
        <div className="bg-rice rounded-xl p-4 m-2 lg:my-4 border border-rice-content/50">
            <div className="mb-4 lg:mb-6">
                <div className="flex items-center">
                    <span className="mr-2 text-2xl">{name}</span>
                    {
                        isOnline && <FontAwesomeIcon icon={faShopSlash} />
                    }
                </div>
                <a href={"https://instagram.com/" + igName} className="flex items-center w-max">
                    <FontAwesomeIcon icon={faInstagram as IconProp} className="mr-2" />
                    <span className="bg-clip-text from-orange-600 to-purple-600 bg-gradient-to-r text-transparent">
                        @{igName}
                    </span>
                </a>
            </div>
            <div className="flex flex-col">
                <ol>
                    {description.map((v, i) => {
                        return (
                            <li key={i}>
                                <span>{v}</span>
                            </li>
                        )
                    })}
                    <li className="my-2">
                        {location?.map((v, i) => {
                            return (
                                <div key={i}>
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-red-950" />
                                    <span className="text-red-950">{v}</span>
                                </div>
                            )
                        })}
                    </li>
                    <li>
                        {link &&
                            <a href={link.startsWith('https://') ? link : ('https://' + link)} className="w-full flex items-center">
                                <FontAwesomeIcon icon={faLink} className="mr-2 text-blue-500" />
                                <span className="text-blue-500 underline">
                                    {link}
                                </span>
                            </a>
                        }
                    </li>
                    {caution.map((v, i) => {
                        return (
                            <li key={i} className="flex items-center">
                                <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 text-gold-300" />
                                <span className="text-gold-300">{v}</span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}