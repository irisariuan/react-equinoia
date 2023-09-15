import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StoreTip({ tip }: { tip: string }) {
    return (
        <div>
            <FontAwesomeIcon className="mr-2 text-gold-300" icon={faNoteSticky} />
            <span className="text-gold-300">{tip}</span>
        </div>
    )
}