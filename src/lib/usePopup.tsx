'use client'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import PopupBubble from "../components/popup/popupBubble"
import { createContext, useContext, useEffect, useState } from "react"
import React from "react"

export interface PopupBubbleValue {
    title: string, content: string, duration: number, initial?: boolean, customState?: boolean, icon?: IconProp
}

export const PopupContext = createContext<[PopupBubbleValue[], (v: PopupBubbleValue[]) => void]>([[], (v) => { }])

function Popup() {
    const [popupList] = useContext(PopupContext)
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 fixed bottom-0 z-[100]">
            {popupList.map((v, i) =>
                <PopupBubble key={i} title={v.title} content={v.content} duration={v.duration} customState={v.customState} icon={v.icon} initial={v.initial} />
            )}
        </div>
    )
}

export function PopupView({ children }: { children: React.ReactNode }) {
    const [popupList, setPopupList] = useState<PopupBubbleValue[]>([])
    return (
        <PopupContext.Provider value={[popupList, setPopupList]}>
            <Popup />
            {children}
        </PopupContext.Provider>
    )
}

export function addPopup(...popupList: PopupBubbleValue[]) {
    const [popup, setPopup] = useContext(PopupContext)
    setPopup([...popupList, ...popup])
}