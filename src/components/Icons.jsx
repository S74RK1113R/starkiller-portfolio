export default function Icons({srcImg, description}) {
    return(
        <div className="w-18 sm:w-20 p-1 border-2 shadow-md rounded-xl border-gray-950 shadow-gray-950/60 dark:border-gray-50 dark:shadow-gray-50/40 ">
            <img src={srcImg} alt={description} />
        </div>
    )
}