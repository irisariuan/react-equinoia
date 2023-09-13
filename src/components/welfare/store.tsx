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
import { StoreLink } from "./store/link";
import { StoreLocation } from "./store/location";
import { StoreCaution } from "./store/caution";

export default function ({ name, igName, description, caution, location, link, isOnline }: WelfareStore) {
    return (
        <div className="bg-rice rounded-xl p-4 my-2 lg:my-4 border border-rice-content/50">
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
            <div>
                <ol className="flex flex-col gap-y-2">
                    {description.map((v, i) => {
                        return (
                            <li key={i}>
                                <span>{v}</span>
                            </li>
                        )
                    })}
                    {(location.length > 1) &&
                        <li className="my-2">
                            {location.map((v, i) =>
                                <StoreLocation location={v} key={i} />
                            )}
                        </li>
                    }
                    {link &&
                        <li className="mb-2">
                            <StoreLink link={link} />
                        </li>
                    }
                    {caution.map((v, i) => {
                        return (
                            <StoreCaution key={i}>{v}</StoreCaution>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}