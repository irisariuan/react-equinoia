'use client'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import PopupBubble from "../components/popup/popupBubble"
import { useEffect, useState } from "react"

interface PopupBubbleValue {
    title: string, content: string, duration: number, initial?: boolean, customState?: boolean, icon?: IconProp
}

export default function () {
    const [popupList, setPopupList] = useState<PopupBubbleValue[]>([])
    function addPopupBubble(option: PopupBubbleValue) {
        console.log('set popup list')
        setPopupList([option, ...popupList])
    }
    useEffect(() => {
        addPopupBubble({ title: 'hello world', content: 'testing', duration: 0 })
    }, [])

    return {
        PopupView: () => {
            console.log('pop up view called')
            useEffect(() => { console.log('inside recv changes', popupList); }, [popupList])
            return (
                <div className="fixed z-[100] top-0 left-1/2 -translate-x-1/2">
                    <div className="flex flex-col justify-center items-center">
                        {popupList.map((v, i) =>
                            <PopupBubble key={i} title={v.title} content={v.content} duration={v.duration} customState={v.customState} icon={v.icon} initial={v.initial} />
                        )}
                    </div>
                </div>
            )
        }, addPopupBubble
    }
}
