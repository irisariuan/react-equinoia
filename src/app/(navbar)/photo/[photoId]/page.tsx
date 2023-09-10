import { check } from "@/lib/photo/check";
import { notFound } from "next/navigation";

export default function ({params}: {params: {photoId: string}}) {
    if (!check(params.photoId)) {
        return notFound()
    }
    return (
        <div></div>
    )
}