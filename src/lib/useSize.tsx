import { useCallback, useEffect, useState } from "react"

export function useSize() {
    const [mobileState, setMobileState] = useState(false)
    const mobileHandler = useCallback(() => {
        setMobileState(window.matchMedia('(orientation: portrait)').matches)
    }, [])

    useEffect(() => {
        mobileHandler()
        window.addEventListener('resize', mobileHandler)
        
        return () => {
            window.removeEventListener('resize', mobileHandler)
        }
    }, [])
    return mobileState
}