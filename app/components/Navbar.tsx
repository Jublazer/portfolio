import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo.png'
import Dock from './gsap/DockMenu'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

function Navbar() {
    const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <div className='container w-full mt-15  p-2 flex items-center justify-space gap-5    max-w-md mx-auto rounded-lg shadow-lg border border-gray-800'>
        <div className='flex item-center justify-start'>
            <Image
                src={logo}
                width={35}
                height={35}
                alt='logo'
                className='rounded-full border-transparent border-solid'
            />
        </div>

        <div className='flex w-full flex-row items-center justify-end md:pr-5 lg:pr-5 gap-5'>
            <Link href={'/'} className=' hover:text-orange-500' >Home</Link>
            <Link href={'/portfolio'} className=' hover:text-orange-500' >Portfolio</Link>
            <Link href={'/about'} className=' hover:text-orange-500' >About</Link>
            <Link href={'/contact'} className=' hover:text-orange-500' >Contact</Link>
        </div>
          {/* <div className="w-full justify-center items-center mx-auto flex w-full flex-row items-center justify-end md:mr-5 lg:mr-5 gap-5">
            <Dock 
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </div>
         */}
    </div>
  )
}

export default Navbar