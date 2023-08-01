export default function({type, id, label, required=true, pattern=null, ...s}) {
    return (
        <div className="">
            <label htmlFor={id} className="block text-xs text-zinc-500 select-none">{label + (required ? '*' : '')}</label>
            <input required={required} type={type} id={id} name={id} {...s} className="rounded-lg border dark:border-white/20 dark:bg-zinc-900 mt-1 mb-5 p-2 placeholder:text-sm dark:placeholder:text-zinc-700 w-10/12" />
        </div>
    )
}