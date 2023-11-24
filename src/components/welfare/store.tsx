import { WelfareStore } from "@/lib/fs/welfare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { StoreLink } from "./store/link";
import { StoreLocation } from "./store/location";
import { StoreCaution } from "./store/caution";
import IgLink from "./store/instagramLink";
import Tooltip from "../ui/tooltip";
import { StorePhone } from "./store/phone";
import { StoreTip } from "./store/tip";
import { StorePhotoContainer } from "./store/photoContainer";

export default function ({ store }: { store: WelfareStore }) {

    return (
        <div className="bg-rice rounded-xl p-4 my-2 lg:my-4 border border-rice-content/50">
            <div className="mb-4 lg:mb-6">
                <div className="flex items-center">
                    <span className="mr-2 text-2xl">{store.name}</span>
                    {
                        store.isOnline &&
                        <Tooltip tooltipText="Online Shop">
                            <FontAwesomeIcon icon={faTowerBroadcast} className="text-lg" />
                        </Tooltip>
                    }
                </div>
                {
                    store.igName &&
                    <IgLink igName={store.igName} />
                }
            </div>
            <div>
                <ol className="flex flex-col gap-y-2 justify-center">
                    {
                        (store.description.length > 0) &&
                        <li>
                            {
                                store.description.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <span>{v}</span>
                                        </div>
                                    )
                                })
                            }
                        </li>
                    }
                    {
                        (store.location.length > 0) &&
                        <li>
                            {store.location.map((v, i) =>
                                <StoreLocation location={v} key={i} />
                            )}
                        </li>
                    }
                    {
                        store.phoneNo &&
                        <li>
                            <StorePhone phoneNo={store.phoneNo} />
                        </li>
                    }
                    {
                        store.link &&
                        <li className="w-fit">
                            <StoreLink link={store.link} />
                        </li>
                    }
                    {
                        store.tip &&
                        store.tip.map((v, i) => {
                            return (
                                <li key={i}>
                                    <StoreTip tip={v} />
                                </li>
                            )
                        })
                    }
                    {
                        (store.caution.length > 0) &&
                        <li>
                            {
                                store.caution.map((v, i) => {
                                    return (
                                        <StoreCaution key={i}>{v}</StoreCaution>
                                    )
                                })
                            }
                        </li>
                    }
                    {
                        (store.photoLinks && store.photoLinks?.length > 0) && 
                        <li>
                            <StorePhotoContainer photoLinks={store.photoLinks} />
                        </li>
                    }
                </ol>
            </div>
        </div>
    )
}