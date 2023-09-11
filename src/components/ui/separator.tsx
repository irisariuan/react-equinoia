export default function ({alignCenter = true}: {alignCenter?: boolean}) {
    return (
        <div className={"flex items-center my-2 lg:my-4 " + (alignCenter ? 'justify-center' : '')}>
            <div className="h-px w-4/5 bg-rice-content" />
        </div>
    )
}