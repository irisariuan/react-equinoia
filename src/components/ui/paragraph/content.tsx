export function ParagraphContent({children, marginY = 0}: {children: React.ReactNode, marginY?: number}) {
    return (
        <p className={"text-lg lg:text-xl my-" + marginY}>{children}</p>
    )
}