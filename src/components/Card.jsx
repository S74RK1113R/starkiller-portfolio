import Button from "./Button";
import Tags from "./Tags";

export default function Card({proyectName,proyectDescription,img, imgDescription, tecnologies, href}) {
    return(
        <div className=" mx-auto sm:max-w-100 space-y-4 border-2 p-5 rounded-2xl shadow-md shadow-gray-950/50 dark:shadow-gray-100/40">
            <div className="max-h-60 overflow-y-scroll rounded-2xl scroll-hidden">
                <img src={img} alt={imgDescription} />
            </div>

            <h1 className="font-extrabold text-2xl uppercase">{proyectName}</h1>
            <p className="text-xl">{proyectDescription}</p>
            
            <div className="grid grid-cols-2 gap-3">
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
    )
}