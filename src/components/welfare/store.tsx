import { WelfareStore } from "@/lib/read/readWelfare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { StoreLink } from "./store/link";
import { StoreLocation } from "./store/location";
import { StoreCaution } from "./store/caution";
import IgLink from "./store/instagramLink";
import Tooltip from "../ui/tooltip";

export default function ({ name, igName, description, caution, location, link, isOnline }: WelfareStore) {
    return (
        <div className="bg-rice rounded-xl p-4 my-2 lg:my-4 border border-rice-content/50">
            <div className="mb-4 lg:mb-6">
                <div className="flex items-center">
                    <span className="mr-2 text-2xl">{name}</span>
                    {
                        isOnline &&
                        <Tooltip tooltipText="Online Shop">
                            <FontAwesomeIcon icon={faTowerBroadcast} className="text-lg" />
                        </Tooltip>
                    }
                </div>
                <IgLink igName={igName} />
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