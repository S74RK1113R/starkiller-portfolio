
export default function Button({children, link}){
    return(
        <a href={link} className="border-2 border-black px-4 py-2  max-w-40 rounded-full outline-red-900 shadow-md shadow-black/80 text-gray-950 text-base font-bold dark:border-gray-100 dark:text-gray-100 dark:shadow-white/10 lg:text-xl"
        >
            {children}
        </a>
    )
}