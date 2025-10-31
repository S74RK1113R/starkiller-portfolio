export default function NavLinks({ children, onclickFunction }) {
  return(
    <li onClick={onclickFunction} className="cursor-pointer group">
        {children}
        <span className="group-hover:w-full block w-0 h-[2px] bg-neutral-950 dark:bg-neutral-100 rounded-full transition-all duration-200"></span>
    </li>
    );
}
