import React from 'react'
import FrontPic from "../assets/img/front-pic.webp"

const Hero = () => {
    return (
        <section id="inicio" className='lg:h-[100vh] flex items-center bg-primary lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt8">
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <p className='text-lg text-sky-400 mb-[10px]'>Hola, soy Elías 👋</p>
                        <h1 className="text-4xl leading-[30px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]">Soy desarrollador front-end</h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                        Desarrollador web apasionado y creativo en busca de nuevos desafíos. Bienvenido a mi portfolio.
                        </p>
                        <button className='btn btn-md bg-sky-600 hover:bg-sky-700 md:btn-lg transition-all'>Trabaja conmigo</button>
                    </div>
                    <div className="hidden lg:flex flex-1 juistify-end items-center h-full">
                        <img src={FrontPic} alt="" className="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero