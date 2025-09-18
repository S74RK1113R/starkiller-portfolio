import Article from "../components/Article";
import Button from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";
import { ReactIcon,HtmlIcon,CssIcon,JsIcon,TailwindcssIcon,GitIcon,GithubIcon,VsCodeIcon} from "../icons/Icons";

const habilitiesIcons = [ReactIcon,HtmlIcon,CssIcon,JsIcon,TailwindcssIcon,GitIcon,GithubIcon,VsCodeIcon]

export default function Index() {
    
    return(
        <DefaultLayout>
            <Article>
                <div className="h-[90vh] space-y-5 flex flex-col justify-center items-center">
                    <h1>Hola, soy <b className="text-red-600 dark:text-red-400 text-2xl">S74RK1113R</b> </h1>
                    <b className="text-2xl font-extrabold ">Desarollador <span></span> frontend</b>
                    <h3 className="text-xl text-gray-800 dark:text-gray-400">Enfocado en la creación de sitios web atractivos y escalables con React.</h3>

                    <Button link={'https://github.com/S74RK1113R'}>
                        Repositorio
                    </Button>
                </div>
            </Article>

            <Article>
                <div>
                    <b>
                        Proyectos
                    </b>
                </div>
                
            </Article>
            
            <Article>
                <div className="text-left" aria-label="Habilidades y herramientas">
                    <b>
                        Habilidades y herramientas
                    </b>
                    <div className="pt-7 grid grid-cols-4 gap-5">
                        
                        {habilitiesIcons.map((Icons,idx)=>{
                            return(
                                <div className="rounded-xl p-2 border-2 border-gray-950 shadow-md shadow-gray-950/50 dark:shadow-gray-100/30 dark:border-gray-100">
                                    <Icons key={idx} properties={'mx-auto w-15'}/>
                                </div>
                            )  
                        })}
                    </div>
                </div>

            </Article>

            <Article>
                <div className="text-left"> 
                    <b>
                        Sobre mí
                    </b>
                    <p>
                        Soy desarrollador frontend web graduado de Ingeniería Informática, me gusta crear experiencias satisfactorias y sobre todo utilizar buenas prácticas al desarrollar.
                    </p>
                    <br/>
                    <p>
                        También me gusta el diseño gráfico, donde he realizado pequeñas tareas como personalización y creación de assets.
                    </p>

                    <br />
                    <p>
                        Disfruto de aprender tecnologías nuevas y seguir mejorando cada día mis habilidades como desarrollador.
                    </p>
                </div>
            </Article>
        </DefaultLayout>
    )
}