import React from 'react'
import {contact} from "../data"

const Contacto = () => {
  return (
    <section className="section bg-secondary" id='contacto'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">Contactame</h2>
                <p className='subtitle'>Si deseas obtener más información, colaborar en un proyecto o simplemente saludar, estaré encantado de escucharte. No dudes en contactarme!</p>
            </div>

            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    {contact.map((item,index) => {
                        const {icon, title, subtitle, description} = item;
                        return (
                        <div className="flex flex-col lg:flex-row gap-x-4" key= {index}>
                            <div className="text-sky-700 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                {icon}
                            </div>
                            <div>
                                <h4 className='font-body text-xl mb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-sky-300 font-normal'>{description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <form className='space-y-8 w-full max-w-[780px]' action="">
                    <div className="flex gap-8">
                        <input className='input' type="text" placeholder='Tu nombre' />
                        <input className='input' type="email" placeholder='Tu correo electrónico' />
                    </div>
                    <input type="text" className='input' placeholder='Asunto' />
                    <textarea className='textarea' placeholder='Tu mensaje'></textarea>
                    <button className='btn btn-lg bg-sky-800 hover:bg-sky-900'>Enviar mensaje</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contacto