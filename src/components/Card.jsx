export default function Card({proyectName,proyectDescription,img}) {
    return(
        <div>
            <img src={img} alt={img.description} />
            <h1>{proyectName}</h1>
            <p>{proyectDescription}</p>

            <Button>
                Ver proyecto
            </Button>
        </div>
    )
}