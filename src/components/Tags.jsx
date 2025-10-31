export default function Tags({children}) {
    return(
        <div className="w-10 bg-gray-950 rounded-full dark:bg-neutral-100 " title={children.description}>
            <img className="w-6 h-6 object-center m-2 rounded-md" src={children.srcImg} alt={children.description} />
        </div>
    )
}