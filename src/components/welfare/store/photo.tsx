export function StorePhoto({ link }: { link: string }) {
    return <>
        <img src={link} alt={""} className="w-full rounded-lg"/>
    </>
}