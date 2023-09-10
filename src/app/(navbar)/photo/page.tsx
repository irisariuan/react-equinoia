import PhotoCoverLink from "@/components/photo/photoCoverLink";

// export default function () {
//     return (
//         <div className="flex flex-col items-center justify-center p-3">
//             <PhotoCoverLink src="/office_man.jpg" title="Testing" target="test" />
//         </div>
//     )
// }
export default function () {
    return (
        <div className="flex w-screen justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
            <img src="fox_2.png" alt="Equinoia Fox" className="w-1/3 mb-4" />
            <span className="text-3xl lg:text-6xl">Work in progress</span>
            </div>
        </div>
    )
}