import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo.png'

function Navbar() {
  return (
    <div className='container-full mb-10 bg-white/10 w-full  p-2 flex items-center justify-space gap-5'>
        <div className='flex item-center justify-start'>
            <Image
                src={logo}
                width={35}
                height={35}
                alt='logo'
                className='rounded-full border-transparent border-solid'
            />
        </div>

        <div className='flex w-full flex-row items-center justify-end md:mr-5 lg:mr-5 sm:hidden gap-5'>
            <Link href={''} className=' hover:text-orange-500' >Home</Link>
            <Link href={''} className=' hover:text-orange-500' >Portfolio</Link>
            <Link href={''} className=' hover:text-orange-500' >About</Link>
            <Link href={''} className=' hover:text-orange-500' >Contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar