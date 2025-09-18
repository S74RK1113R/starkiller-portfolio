export default function Article({children}) {
    return(
        <article className="flex flex-col text-xl font-mono dark:text-gray-100 text-center">
            {children}
        </article>
    )
}