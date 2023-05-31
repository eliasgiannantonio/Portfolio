import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`} >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link to="inicio" smooth={true} duration={500}><button><img src={Logo} alt="" className='w-20' /></button>
        </Link>
        <div className='hidden lg:block'>
          <Nav />
        </div>
        <div className='hidden lg:block'>
          <Socials />
        </div>
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header >
  );
}

export default Header;
