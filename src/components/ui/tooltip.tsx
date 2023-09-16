export default function ({children, tooltipText} : {children: React.ReactNode, tooltipText: string}) {
    return (
        <div className="group flex items-center justify-center">
            {children}
            <div className="left-0.5 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 origin-left scale-50 opacity-0 relative transition-all flex items-center justify-center">
                <div className="w-2 overflow-hidden inline-block">
                    <div className="h-3 bg-rice-tooltip border border-rice-dark/50 -rotate-45 transform origin-top-right"></div>
                </div>
                <div className="px-1 outline outline-rice-dark/50 outline-1 bg-rice-tooltip rounded-md">
                    <span className="text-sm">{tooltipText}</span>
                </div>
            </div>
        </div>
    )
}