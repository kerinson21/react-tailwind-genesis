import Hero from "./componets/Hero"
import backgroundImage from '../assets/img/fondo-hero.jpeg'

function App() {
  return (
    <>
     <section className="h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <nav className="z-10 bg-white fixed md:static w-full md:w-auto border-b md:border-none whadow-lg md:shadow-none " style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="p-6 container mx-auto">
            <div className="flex item-center justify-between">
                {/* logo */}
                <div>
                  <a href="" className="flex items-center">
                    <span className="text-3xl ml-3  font-bold">Litigade</span>
                  </a>
                </div>
                {/* cuerpo del menu */}
                
                <div>
                    {/* boton responsive */}
                    <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden/>
                    <label htmlFor="hamburger" className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 rounded">
                        <div className="h-0.5 w-6 bg-black transition"></div>
                        <div className="mt-2 h-0.5 w-6 bg-black transition"></div>
                        <div className="mt-2 h-0.5 w-6 bg-black transition"></div>
                    </label>

                    {/* cuerpo de enlaces */}

                    <div className="w-3/5 transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">
                      {/* enlaces */}
                        <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">Home</a>
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">Product</a>
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">Princig</a>
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">Contact</a>
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                          </a>
                          <a href="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                          </a>
                          <a href="" className="tracking-wide cursor-pointer px-3 py-2 rounded text-lg transition">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                          </svg>
                          </a>
                        </div>
                        
                    
                    </div>

                </div>

            </div>
          </div>
        </nav>
        <Hero/>
        
     </section>
    </>
  )
}

export default App
