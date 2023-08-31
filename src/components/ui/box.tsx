export function Box({children, flexDirection = 'col'} : {children: React.ReactNode, flexDirection?: 'col' | 'row'}) {
    return (
        <div className={'flex-' + flexDirection + " flex justify-center items-center"}>
            {children}
        </div>
    )
}