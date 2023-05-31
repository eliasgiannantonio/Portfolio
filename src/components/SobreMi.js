import React from 'react';
import Image from "../assets/img/about.webp";
import Pdf from '../assets/pdf/CV_EliasGiannantonio.pdf';
import { Link } from 'react-scroll';

const SobreMi = () => {
  return (
    <section id="sobremi" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-sobremi relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Elías Giannantonio
              </h2>
              <p className="mb-4 text-sky-300">Desarrollador web freelance</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Hola! Soy Elias Giannantonio, un apasionado estudiante de desarrollo web de 21 años.
                Con un nivel avanzado de inglés (C1) y experiencia en el uso de tecnologías como
                React, Tailwind, Django, MySQL, HTML, CSS y JavaScript, estoy preparado para enfrentar
                desafíos en el mundo del desarrollo web. Aunque no tengo experiencia laboral,
                estoy entusiasmado por comenzar mi carrera profesional y poner en práctica mis habilidades.
              </p>
            </div>

            <div className="flex flex-row gap-12">
              <Link
                to="contacto"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="btn btn-md bg-sky-600 hover:bg-sky-700 transition-all cursor-pointer"
              >
                Contactame
              </Link>
              <a href={Pdf} target="_blank" rel="noopener noreferrer">
                <button className="rounded border border-current px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                  Descargar CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
