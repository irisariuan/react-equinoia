import { faBan, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ({ href, children, disabled = false }: { href: string, children: React.ReactNode, disabled?: boolean }) {
    return (
        <div className="m-2 lg:m-4">
            <Link href={href} className={"flex items-center " + (disabled ? 'pointer-events-none' : '')}>
                <span className="text-3xl lg:text-6xl text-gold-300">
                    {children}
                </span>
                {
                    disabled ? 
                    <FontAwesomeIcon icon={faBan} className="ml-2 lg:text-3xl text-xl text-gold-300" />
                    :
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2 lg:text-3xl text-xl text-gold-300" />
                }
            </Link>
        </div>
    )
}