import ThemeSwitcher from "./ThemeSwitch";
import deadStar from "/dead_star.svg";
export default function NavBar() {
    return(
        <>
            <nav className="fixed flex flex-row bg-transparent backdrop-blur-xs w-full py-2 px-5 justify-end border-b-2 border-b-zinc-500 dark:border-b-zinc-200">
                <ul className="flex flex-row w-full">
                    <li className="w-10">
                        <img src={deadStar} alt="Dead Star icon" />
                    </li>
                    <div className="flex-1"></div>
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