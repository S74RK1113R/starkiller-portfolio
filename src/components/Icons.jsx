export default function Icons({srcImg, description,tooltip}) {
    return(
        <div className="m-2 w-18 sm:w-20 p-1 border-2 shadow-md rounded-xl border-gray-950 shadow-gray-950/60 dark:border-gray-50 dark:shadow-gray-50/40 " title={tooltip}>
            <img className="rounded-md size-18" src={srcImg} alt={description} />
        </div>
    )
}