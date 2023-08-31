import PhotoCoverLink from "@/components/photo/photoCoverLink";

export default function () {
    return (
        <div className="flex flex-col items-center justify-center p-3">
            <PhotoCoverLink src="/office_man.jpg" title="Testing" target="/" />
        </div>
    )
}