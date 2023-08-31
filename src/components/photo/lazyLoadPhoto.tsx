import { Suspense } from "react";
import PhotoLoading from "./photoLoading";

export default function () {
    return (
        <Suspense fallback={<PhotoLoading />}>
        
        </Suspense>
    )
}