import Button from "./Button";
import Tags from "./Tags";

export default function Card({proyectName,proyectDescription,img, imgDescription, tecnologies, href}) {
    return(
        <div className="lg:w-full lg:flex lg:flex-row xl:max-w-[700px] md:gap-5 mx-auto h-full space-y-4 border-2 p-5 rounded-2xl shadow-md shadow-gray-950/50 dark:shadow-gray-100/40">
            <div className="max-h-60 lg:max-w-80 overflow-y-scroll rounded-2xl scroll-hidden">
                <img src={img} alt={imgDescription} />
            </div>

            <div className="flex-1 flex flex-col space-y-3 items-center place-items-center">
                
                <div className="flex-1 m-3">
                    <h1 className="font-extrabold text-[18px] uppercase">{proyectName}</h1>
                    <p className="text-sm">{proyectDescription}</p>
                </div>

                <div className="grid grid-cols-5 gap-3">

                    {tecnologies.map((data,idx)=>{
                        return(
                            <Tags key={idx}>
                                {data}
                            </Tags>
                        )
                    })}
                </div>
                
                <div className="p-4">
                   <Button link={href}>
                    Ver proyecto
                    </Button> 
                </div>
            </div>
            
        </div>
    )
}