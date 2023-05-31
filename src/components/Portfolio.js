import React from 'react'

import Proyectos from './Proyectos'
import ProyectoIndiv from './ProyectoIndiv'

const Portfolio = () => {
    return (
        <section id="portfolio" className='section bg-primary min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/4 before:hidden before:lg:block">Mis ultimos proyectos</h2>
                    <p className='subtitle'>A continuación podrás ver algunos de los proyectos en los que he trabajado durante mis tiempos de aprendizaje!</p>
                </div>
                <Proyectos />
            </div>
        </section>
    )
}

export default Portfolio