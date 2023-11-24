'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StorePhoto } from "./photo";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ArrowButton } from "@/components/ui/hook/arrowBtn";
import { useEffect, useState } from "react";
import { AnimatePresence, useAnimate, motion } from "framer-motion";

export function StorePhotoContainer({ photoLinks }: { photoLinks: string[] }) {
    const [opened, setOpen] = useState(false)

    return (
        <div className="">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faImage} className="mr-2 text-gold-300" />
                <ArrowButton opened={opened} setOpen={setOpen} className="text-gold-400" />
            </div>
            <AnimatePresence>
                {
                    opened &&
                    <motion.div className="mt-4 flex flex-col gap-2 min-h-fit p-1 lg:p-4 bg-rice-tooltip border border-gold-200/60 rounded-xl scale-y-0 origin-top" animate={{ scaleY: [0, 1] }} exit={{ scaleY: [1, 0] }}>
                        {
                            photoLinks.map((v, i) => <StorePhoto key={i} link={v} />)
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}