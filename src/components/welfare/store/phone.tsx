import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StorePhone({phoneNo}: {phoneNo: string}) {
    return (
        <div>
            <FontAwesomeIcon icon={faPhone} className="text-gold-300 mr-2" />
            <span className="text-gold-300">{phoneNo}</span>
        </div>
    )
}