import React from 'react'
import { social } from "../data"
import Logo from "../assets/img/logo.svg"

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className="conmtainer mx-auto">
                <div className="flex flex-col space-y-6 lg:space-y-0 items-center justify-items-center pb-3">
                    <div className="flex space-x-6 items-center justify-center justify-items-center">
                        {social.map((item, index) => {
                            const { href, icon } = item
                            return (
                                <a className="text-sky-800 text-base" href={href} key={index}>
                                    {icon}
                                </a>
                            )
                        })}
                        </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                        <img src={Logo} alt="" className='h-9' />
                        <h3 className=' py-2'>Elías Giannantonio</h3>
                        <p>&copy; 2023 Elias Giannantonio. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer