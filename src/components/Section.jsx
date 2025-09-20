export default function Section({children}) {
    return(
        <section className="flex flex-col text-xl font-mono dark:text-gray-100 text-center sm:text-2xl">
            {children}
        </section>
    )
}