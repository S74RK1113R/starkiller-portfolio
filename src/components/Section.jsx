export default function Section({children}) {
    return(
        <section className="my-40 flex flex-col text-xl font-mono dark:text-gray-100 text-center sm:text-2xl items-center justify-center ">
            {children}
        </section>
    )
}