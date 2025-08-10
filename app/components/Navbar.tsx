import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='container-full h-20 p10 flex items-center justify-space gap-5'>
        <div className='flex item-center justify-start'>
            <Image
                src={''}
                width={35}
                height={35}
                alt='logo'
                className='rounded-full border-transparent border-solid'
            />
        </div>

        <div className='flex w-full flex-row items-center justify-center gap-5'>
            <Link href={''} className=' hover:text-orange-500' >Home</Link>
            <Link href={''} className=' hover:text-orange-500' >Portfolio</Link>
            <Link href={''} className=' hover:text-orange-500' >About</Link>
            <Link href={''} className=' hover:text-orange-500' >Contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar