import Section from "../components/Section";
import Button from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";
import { proyectInformation } from "../proyects/ProyectInformation";
import Card from "../components/Card";
import {
  ArrowDown,
  GithubSquare,
  Gmail,
  habilitiesIcons,
  LinkedinSquare,
  Whatsapp,
} from "../icons/Icons";
import Icons from "../components/Icons";
import { useRef } from "react";

export default function Index() {
  const projects = useRef();
  const skills = useRef();
  const aboutMe = useRef();
  const contact = useRef();

  function handleClicktoProjects() {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }

  return (
    <DefaultLayout
      projectRef={projects}
      skillsRef={skills}
      aboutMeRef={aboutMe}
      contactRef={contact}
    >
      <section className="min-h-screen flex flex-col text-xl font-mono dark:text-gray-100 text-center sm:text-2xl items-center justify-center ">
        <div className="w-full space-y-5 flex flex-col justify-center items-center">
          <h2 className="sm:text-2xl">
            Hola, soy{" "}
            <span className="text-red-600 dark:text-red-400 text-2xl sm:text-3xl font-bold">
              S74RK1113R
            </span>{" "}
          </h2>
          <h1 className="text-2xl font-extrabold sm:text-3xl">
            Desarollador <span></span> frontend
          </h1>
          <h3 className="text-xl text-gray-800 dark:text-gray-400 sm:text-2xl">
            Enfocado en la creación de sitios web atractivos y escalables con
            React.
          </h3>

          <Button link={"https://github.com/S74RK1113R"}>Repositorio</Button>

          <div
            className="absolute bottom-0 -z-0"
            onClick={handleClicktoProjects}
          >
            <ArrowDown
              classProperties={
                "current-color text-neutral-900 dark:text-zinc-300 w-15 animate-bounce cursor-pointer"
              }
            />
          </div>
        </div>
      </section>

      <Section>
        <div ref={projects} className="w-full">
          
          <h1 className="font-bold sm:text-2xl text-left">Proyectos</h1>
          
          <div
            aria-label="Proyect cards"
            className="grid justify-center, place-items-center pt-5 gap-5 lg:grid-cols-1 md:gap-5"
          >
            {proyectInformation.map((data) => {
              return (
                <Card
                  key={data.id}
                  img={data.img}
                  proyectName={data.name}
                  proyectDescription={data.description}
                  imgDescription={data.imgDescription}
                  tecnologies={data.tecnologies}
                  href={data.href}
                />
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div
          ref={skills}
          className="text-left w-full"
          aria-label="Habilidades y herramientas"
        >
          <h1 className="font-bold text-xl sm:text-2xl">
            Habilidades y herramientas
          </h1>
          <div className="mt-10 grid grid-cols-4 auto-cols-fr auto-rows-fr place-items-center gap-1 sm:gap-5">
            {Object.values(habilitiesIcons).map((data, idx) => {
              return (
                <Icons
                  tooltip={data.description}
                  key={idx}
                  srcImg={data.srcImg}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div ref={aboutMe} className="text-left w-full text-lg">
          <h1 className="font-bold text-xl sm:text-2xl">Sobre mí</h1>
          <p>
            Soy desarrollador frontend web graduado de Ingeniería Informática,
            me gusta crear experiencias satisfactorias y sobre todo utilizar
            buenas prácticas al desarrollar.
          </p>
          <br />
          <p>
            También me gusta el diseño gráfico, donde he realizado pequeñas
            tareas como personalización y creación de assets.
          </p>

          <br />
          <p>
            Disfruto de aprender tecnologías nuevas y seguir mejorando cada día
            mis habilidades como desarrollador.
          </p>
        </div>
      </Section>

      <Section>
        <div ref={contact} className="text-left w-full">
          <h1 className="font-bold text-xl sm:text-2xl">Contáctame</h1>
          <p className="text-lg mt-10">
            Si te gusta mi trabajo puedes contactarme a cualquiera de mis redes.
          </p>
          <div className="flex flex-row mt-5 gap-5 w-full justify-center">
            <a href="https://wa.link/ywwvk8" target="_blank" title="Whatsapp">
              <Whatsapp className="size-12 md:size-15 cursor-pointer fill-current text-neutral-950 dark:text-neutral-100" />
            </a>

            <a href="https://github.com/S74RK1113R" target="_blank" title="Github">
              <GithubSquare className="size-12 md:size-15 cursor-pointer fill-current text-neutral-950 dark:text-neutral-100" />
            </a>
            <a href="https://www.linkedin.com/in/randy-escalona-fr%C3%ADas-31a498324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" title="Linkedin">
              <LinkedinSquare className="size-12 md:size-15 cursor-pointer fill-current text-neutral-950 dark:text-neutral-100" />
            </a>

            <a href="mailto:randyes16@gmail.com?subject=Work!&body=Dear%20S74RK1113R" target="_blank" title="Gmail">
              <Gmail className="size-12 md:size-15 cursor-pointer fill-current text-neutral-950 dark:text-neutral-100" />
            </a>
          </div>
        </div>
      </Section>
    </DefaultLayout>
  );
}
