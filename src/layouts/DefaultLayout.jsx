import NavBar from '../components/NavBar'

export default function DefaultLayout({children, projectRef, aboutMeRef, skillsRef, contactRef}) {
    return (   
        <div className="flex flex-col items-center transition-all duration-200">
            <header className='w-full'>
                <NavBar projectRef={projectRef} aboutMeRef={aboutMeRef} skillsRef={skillsRef} contactRef={contactRef} />
            </header>

            <main className="min-h-screen flex-1 w-full px-5 md:max-w-7/12 lg:max-w-8/12 xl:max-w-6/12 mx-auto dark:bg-gray-900">
                {children}
            </main>

            <footer className="p-3 flex flex-col w-full items-center justify-center border-t-1 border-t-gray-800 dark:bg-gray-900
            dark:border-t-gray-500">
                <p className='flex flex-row gap-5 font-bold text-xl items-center justify-center text-gray-950 dark:text-gray-100'>
                    <span className='text-2xl text-red-600 block dark:text-red-400'>©2025</span>
                    S74RK1113R
                </p>
            </footer>
        </div>
    );
}