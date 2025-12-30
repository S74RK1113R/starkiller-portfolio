import ThemeSwitcher from "./ThemeSwitch";
import deadStar from "/dead_star.svg";
import NavLinks from "./NavLinks";
import {ES} from "../lang/ES";
import {EN} from "../lang/EN";
import { useLang } from "../context/LangContextProvider";
import LangSwitcher from "./LangSwitcher";

export default function NavBar({homeRef,
  projectRef,
  aboutMeRef,
  skillsRef,
  contactRef
}) {
  const {lang} = useLang();

  const pageLang = lang ? EN : ES;
  function handleMobileMenuClick() {
    const pingbar1 = document.querySelector(".pinbar-1");
    const pingbar2 = document.querySelector(".pinbar-2");
    const pingbar3 = document.querySelector(".pinbar-3");
    const mobileMenu = document.querySelector("#mobile-menu");

    pingbar1.classList.toggle("pin-bar-right-rotate");
    pingbar2.classList.toggle("pin-bar-middle-hide");
    pingbar3.classList.toggle("pin-bar-left-rotate");
    mobileMenu.classList.toggle("toggle-mobile-menu");
  }
  function handleScrollIntoHome(){
    homeRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  function handleScrollIntoProyects() {
    projectRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  function handleScrollIntoSkills() {
    skillsRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  function handleScrollIntoAboutMe() {
    aboutMeRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  function handleScrollIntoContactMe() {
    contactRef.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }
  return (
    <nav className="fixed flex flex-row bg-transparent backdrop-blur-xs w-full py-2 px-5 justify-end border-b-2 border-b-zinc-500 dark:border-b-zinc-200 z-20">
      <div className="flex flex-row w-full">
        <div className="w-10 cursor-pointer" title={`${lang ? "Navigate to the home page" : "Navegar al inicio de la página" }`} onClick={handleScrollIntoHome}>
          <img src={deadStar} alt="Dead Star icon" />
        </div>

        {/* Pc nav menu */}
        <div className="flex-1">
          <ul className="hidden md:flex flex-row items-center justify-center gap-5 w-full h-full text-zinc-950  dark:text-neutral-100 font-bold">
            <NavLinks onclickFunction={handleScrollIntoProyects}>
              {pageLang.menuOption1}
            </NavLinks>
            <NavLinks onclickFunction={handleScrollIntoSkills}>
              {pageLang.menuOption2}
            </NavLinks>
            <NavLinks onclickFunction={handleScrollIntoAboutMe}>
              {pageLang.menuOption3}
            </NavLinks>
            <NavLinks onclickFunction={handleScrollIntoContactMe}>
              {pageLang.menuOption4}
            </NavLinks>
          </ul>
        </div>

        <div>
          <LangSwitcher/>
        </div>
        <div>
          <ThemeSwitcher />
        </div>

        {/* Mobile nav menu */}
        <div
          onClick={handleMobileMenuClick}
          className="md:hidden relative h-full w-10 ml-3 rounded-md flex flex-col items-center justify-center gap-1 "
        >
          <span className="pinbar-1 block w-11/12 h-2 bg-neutral-950 dark:bg-neutral-100 rounded-full transition-all duration-200"></span>
          <span className="pinbar-2 block w-11/12 h-2 bg-neutral-950 dark:bg-neutral-100 rounded-full transition-all duration-200"></span>
          <span className="pinbar-3 block w-11/12 h-2 bg-neutral-950 dark:bg-neutral-100 rounded-full transition-all duration-200"></span>

          <div
            id="mobile-menu"
            className="absolute bg-neutral-100/90 dark:bg-neutral-950/90 backdrop-blur-xs border-2 dark:border-neutral-100 border-neutral-950 top-12 p-5 right-0 rounded-md transition-transform duration-300 z-0 scale-0"
          >
            <ul className="flex flex-col items-center justify-center gap-5 w-full h-full text-zinc-950  dark:text-neutral-100 font-bold text-nowrap">
              <li onClick={handleScrollIntoProyects} className="cursor-pointer">
                {pageLang.menuOption1}
              </li>
              <li onClick={handleScrollIntoSkills} className="cursor-pointer">
                {pageLang.menuOption2}
              </li>
              <li onClick={handleScrollIntoAboutMe} className="cursor-pointer">
                {pageLang.menuOption3}
              </li>
              <li
                onClick={handleScrollIntoContactMe}
                className="cursor-pointer"
              >
                {pageLang.menuOption4}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}