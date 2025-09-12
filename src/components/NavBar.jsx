import ThemeSwitcher from "./ThemeSwitch";

export default function NavBar() {
    return(
        <>
            <nav className="sticky top-0 w-full flex flex-row justify-end  gap-4 p-2 pr-5 bg-gray-900/90 text-gray-50 backdrop-blur-xs border-b-1 border-gray-400">
                <ul>
                    <li>
                        
                    </li>
                    <li>
                        <ThemeSwitcher/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export function Link({name,href}) {
    return(
        <a className=" hover:text-red-400 text-xl font-bold" href={href}>{name}</a>
    )
}