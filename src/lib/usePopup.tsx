'use client'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import PopupBubble from "../components/popup/popupBubble"
import { createContext, useContext, useEffect, useState } from "react"
import React from "react"

interface PopupBubbleValue {
    title: string, content: string, duration: number, initial?: boolean, customState?: boolean, icon?: IconProp
}

export const PopupContext = createContext<[PopupBubbleValue[], (v: PopupBubbleValue[]) => void]>([[], (v) => {}])

function Popup() {
    const [ popupList ] = useContext(PopupContext)
    return (
        <div className="fixed z-[100] top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-center items-center">
                {popupList.map((v, i) =>
                    <PopupBubble key={i} title={v.title} content={v.content} duration={v.duration} customState={v.customState} icon={v.icon} initial={v.initial} />
                )}
            </div>
        </div>
    )
}

export function PopupView({children} : {children: React.ReactNode}) {
    const [popupList, setPopupList] = useState<PopupBubbleValue[]>([])
    return (
        <PopupContext.Provider value={[popupList, setPopupList]}>
            <Popup />
            {children}
        </PopupContext.Provider>
    )
}