
function App() {
  return (
    <>
     <nav className="z-10 bg-white fixed md:static w-full md:w-auto border-b md:border-none whadow-lg md:shadow-none ">
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

              {/* Cuerpo de los enlaces del menu */}
              <div className="bg-white w-3/5 shadows-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0
              md:w-auto md:shadow-none md:translate-x-0 md:flex-row ">



              </div>

            </div>

        </div>
      </div>
     </nav>
    </>
  )
}

export default App
