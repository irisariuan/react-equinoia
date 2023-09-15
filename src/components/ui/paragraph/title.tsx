export function ParagraphTitle({children, className = ''}: {children: React.ReactNode, className?: string}) {
    return (<span className={"text-3xl lg:text-4xl my-2 lg:my-4 " + className}>{children}</span>)
}