export function ListView({children}: {children: React.ReactNode}) {
    return (
        <ol className="p-2">
            {children}
        </ol>
    )
}