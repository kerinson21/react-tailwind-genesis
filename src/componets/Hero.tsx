import FormBookA from "./FormBookA";


export default function Hero(){

    return (
        <>
            <div className="container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">
                {/* cuerpo */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left items-center text-center pb-5">
                    {/* texto */}
                    <h1 className="lg:text-6xl text-5xl mb-4 font-medium">Help to reclaim you <br/>life and freedom</h1>
                    <p className="mb-8 leading-relaxed text-zinc-600">We know large objects will act, but things on a small scale.</p>

                   {/* botones */}
                   <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-yellow-900 text-white font-semibold rounded-full hover:bg-brown-800 focus:outline-none">
                        Get Quote Now
                    </button>
                    <button className="px-6 py-3 border-2 border-yellow-900 text-brown-700 font-semibold rounded-full hover:bg-brown-700 hover:text-white focus:outline-none">
                        Learn More
                    </button>
                    </div>
                </div>
                
                {/* formulario */}
                <FormBookA/>
            </div>
        </>
    )
}