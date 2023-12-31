import { ParagraphTitle } from "@/components/ui/paragraph/title";
import Separator from "@/components/ui/separator";

export default function () {
    return (
        <div className="p-2 w-screen overflow-scroll">
            <ParagraphTitle>Election Platform</ParagraphTitle>
            <Separator alignCenter={false} />
            <div className="flex flex-col gap-y-4 scrollbar mt-6">
                <div className="flex flex-col gap-y-2">
                    <span className="text-xl lg:text-2xl">中文版</span>
                    <iframe src="https://drive.google.com/file/d/17Nsp1i09Ft2DNPEl_cUecqoJ2IJ5aGaE/preview" title="Chinese Election Platform" height="400" className="rounded-lg"></iframe>
                </div>
                <div className="flex flex-col gap-y-2 w-full mt-6">
                    <span className="text-xl lg:text-2xl">English Version</span>
                    <iframe src="https://drive.google.com/file/d/1Lx4tleRcPJBxneIapqTxY98RdmOC6m6k/preview" title="English Election Platform" height="400" className="rounded-lg"></iframe>
                </div>
            </div>
        </div>
    )
}