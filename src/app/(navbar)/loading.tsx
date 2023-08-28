import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="flex justify-center items-center content-center h-screen">
            <div className="">
                <FontAwesomeIcon icon={faSpinner} spin className="text-6xl m-6 text-rice-content dark:text-gold-300" />
            </div>
        </div>
    )
}