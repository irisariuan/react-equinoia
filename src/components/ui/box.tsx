export function Box({ children, flexDirection = 'col', itemsAlign = 'center' }: { children: React.ReactNode, flexDirection?: 'col' | 'row', itemsAlign?: 'center' | 'left' | 'right' }) {
    return (
        <div className={'flex-' + flexDirection + " flex justify-" + itemsAlign + " items-" + itemsAlign}>
            {children}
        </div>
    )
}