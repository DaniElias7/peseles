
export default function Home() {
  return (
    <div className="grid max-w-screen-2xl pt-4 px-4">
        <header className="flex flex-row justify-center">
            <h1 className="basis-1/4 ml-4 text-xl mt-2">Peseles</h1>
            <div className="flex flex-row basis-3/4">
                <input 
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="Type to search..."
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 border placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
                <button className="bg-[#10b981] text-white px-6 hover:bg-green-600">Search</button>
            </div>
            <div className="flex ml-4">
                <button className="px-6 border border-slate-300 mx-2 hover:bg-yellow-400">Images</button>
                <button className="px-6 border border-slate-300 mx-2 hover:bg-yellow-400">Videos</button>
            </div>
        </header>
        <main>
            <a 
                href="https://www.pexels.com" 
                target="_blank"
                className="text-center text-xl w-full" 
            >
                Images provided by Pexels
            </a>
        </main>
    </div>
  );
}
