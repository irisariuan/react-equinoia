export default function({title, children}) {
    return (
        <div className="bg-rice dark:bg-black p-5 rounded-2xl m-2 border dark:border-zinc-800 border-rice-content">
            <p className="text-lg text-gold-400 dark:text-zinc-400 mb-8">{title}</p>
            {children}
        </div>
    )
}