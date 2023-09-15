import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StoreCaution({children}: {children: React.ReactNode}) {
    return (
        <div className="flex items-center">
            <FontAwesomeIcon icon={faCircleExclamation} className="mr-2 text-gold-300" />
            <span className="text-gold-300">{children}</span>
        </div>
    )
}