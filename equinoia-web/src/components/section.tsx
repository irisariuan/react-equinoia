export default function({title, children}) {
    return (
        <div className="dark:text-rice dark:bg-rice/20 bg-rice-content text-rice-dark p-3 box-content rounded-2xl m-3 border dark:border-white/20 border-rice-dark/20 ">
            <div className="h-60 overflow-auto rounded-xl">
                <h1 className="m-5 mb-8 text-4xl font-bold text-gold-300 dark:text-white">{title}</h1>
                <div className="ml-5 m-2 flex flex-row">
                    {children}
                </div>
            </div>
        </div>
    )
}