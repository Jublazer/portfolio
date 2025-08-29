"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/TimmiLogo.png'
import Dock from './gsap/DockMenu'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { GlassDiv } from './GlassDiv'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [navBar, setNavBar] = useState(false)
    const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  const toggleNav = ()=>{
    setNavBar(!navBar);
  }

const handleNavClose = ()=>{
  setNavBar(false)
}

  return (
    <div className=' flex items-center justify-space backdrop-filter backdrop-blur-lg bg-opacity-10 max-w-[1300px] mt-2  p-2 gap-5 bg-white/20 mx-auto rounded-lg shadow-lg border border-gray-800'>
        <div className='flex item-center justify-start'>
            <Image
                src={logo}
                width={35}
                height={35}
                alt='logo'
                className='rounded-full border-transparent border-solid'
            />
        </div>

        {/* MD version Navbar */}
        <div className='w-full hidden md:flex flex-row items-center justify-end md:pr-5 lg:pr-5 gap-5'>
            <Link href={'/'} className='  hover:text-orange-500' >Home</Link>
            <Link href={'/portfolio'} className=' hover:text-orange-500' >Portfolio</Link>
            <Link href={'/about'} className=' hover:text-orange-500' >About</Link>
            <Link href={'/contact'} className=' hover:text-orange-500' >Contact</Link>
        </div>

        <div className='md:hidden z-100' onClick={toggleNav}>
          {
            navBar ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
            
          } 
        </div>

        {/* Mobile version Navbar */}
              <div className={navBar ? "z-30 fixed text-2xl top-0 left-0 w-full h-screen  bg-[#232323] ease-in-out duration-500 " : "z-100 w-full h-screen  bg-[#232323] fixed text-2xl top-0 left-[-100%] ease-in-out duration-500 "}>
              <div className=" flex flex-col p-5 gap-4 items-center justify-center">
                <Link onClick={handleNavClose} href={'/'} className=' hover:text-orange-500' >Home</Link>
                <Link onClick={handleNavClose} href={'/portfolio'} className=' hover:text-orange-500' >Portfolio</Link>
                <Link onClick={handleNavClose} href={'/about'} className=' hover:text-orange-500' >About</Link>
                <Link onClick={handleNavClose} href={'/contact'} className=' hover:text-orange-500' >Contact</Link>
              </div>

          </div>
         
    </div>
  )
}

export default Navbar