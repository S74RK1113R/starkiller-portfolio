import Section from "../components/Section";
import Button from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";
import { proyectInformation } from "../proyects/ProyectInformation";
import Card from "../components/Card";
import { habilitiesIcons } from "../icons/Icons";
import Icons from "../components/Icons";



export default function Index() {
    
    return(
        <DefaultLayout>
            <Section>
                <div className="h-[90vh] space-y-5 flex flex-col justify-center items-center">
                    <h1 className="sm:text-2xl">Hola, soy <b className="text-red-600 dark:text-red-400 text-2xl sm:text-3xl">S74RK1113R</b> </h1>
                    <b className="text-2xl font-extrabold sm:text-3xl">Desarollador <span></span> frontend</b>
                    <h3 className="text-xl text-gray-800 dark:text-gray-400 sm:text-2xl">Enfocado en la creación de sitios web atractivos y escalables con React.</h3>

                    <Button link={'https://github.com/S74RK1113R'}>
                        Repositorio
                    </Button>
                </div>
            </Section>

            <Section>
                <div className="w-full">
                    <p className="text-left">
                        <b>
                            Proyectos
                        </b>
                    </p>
                    <div aria-label="Proyect cards" className="grid justify-center, place-items-center pt-5 gap-5 lg:grid-cols-2 md:gap-5">
                        {
                            proyectInformation.map((data)=>{
                                return(
                                <Card key={data.id} img={data.img} proyectName={data.name} proyectDescription={data.description} imgDescription={data.imgDescription}
                                tecnologies={data.tecnologies}
                                href={data.href}/>
                                )
                            })
                        }
                    </div>
                    
                </div>
                
            </Section>
            
            <Section>
                <div className="text-left" aria-label="Habilidades y herramientas">
                    <b>
                        Habilidades y herramientas
                    </b>
                    <div className="pt-7 grid grid-cols-4 gap-4 place-items-center sm:gap-10">

                        {habilitiesIcons.map((data,idx)=>{
                            return(
                                <Icons key={idx} srcImg={data.srcImg} description={data.description}/>
                            )
                        })}

                    </div>
                </div>

            </Section>

            <Section>
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
            </Section>
        </DefaultLayout>
    )
}