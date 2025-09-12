import NavBar from '../components/NavBar'

export default function DefaultLayout({children}) {
    return (
      <>
        <div className="relative h-screen flex flex-col items-center overflow-y">
            <NavBar />

            <main className="flex-1 w-full sm:max-w-8/12 mx-auto dark:bg-gray-900">
                {children}
            </main>

            <footer className="p-3 flex flex-col w-full items-center justify-center bg-gray-950 border-t-1 border-t-gray-400">
                <p className='flex flex-row gap-5 font-bold text-xl items-center justify-center text-gray-50'>
                    <span className='text-2xl text-red-400 block'>©2025</span>
                    S74RK1113R
                </p>
            </footer>
        </div>

      </>
    );
}