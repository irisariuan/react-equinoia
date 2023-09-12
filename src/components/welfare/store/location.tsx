import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StoreLocation({location} : {location: string}) {
    return (
        <div>
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-red-950" />
            <span className="text-red-950">{location}</span>
        </div>
    )
}