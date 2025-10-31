
export default function Button({children, link}){
    return(
        <a href={link} target="
        _blank" className="border-2 border-black px-4 py-2  max-w-40 rounded-full outline-red-900 shadow-md shadow-black/80 text-gray-950 text-base font-bold dark:border-gray-100 dark:text-gray-100 dark:shadow-white/10 lg:text-xl hover:bg-gray-950 hover:text-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-950 transition-colors duration-300"
        >
            {children}
        </a>
    )
}