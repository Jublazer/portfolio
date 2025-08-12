"use client"

import character from '../../public/assets/Character.png'
import { TypeAnimation } from 'react-type-animation'
import { useRef } from "react"
import { Particles } from "./ui/Particles"
import Image from 'next/image'

export const Hero = ()=>{
    const parallaxRef = useRef<HTMLDivElement>(null)
    return(
        <div className='overflow-x-clip relative w-[78rem] min-h-screen pt-12 flex items-center justify-center gap-6'>
            <div className='container mx-auto space-y-6 flex flex-col justify-center items-center' ref={parallaxRef}>
                <Image 
                    src={character}
                    alt='Character'
                    className='mx-auto  '
                    width={250}
                />
                <h1 className='font-extrabold text-orange-200 text-7xl'>Lets create</h1>
                <TypeAnimation 
                    sequence={[
                        "Experience", 1000,
                        "Apps", 1000,
                        "Websites", 1000,
                        "UI/UX designs", 1000,
                        "Business/Tech Coaching", 1000,
                        "Branding", 1000,
                    ]}
                    className='md:text-5xl text-3xl  text-orange-500 inline-block'
                    wrapper='h1'
                    cursor={true}
                    repeat={Infinity}
                />
                <p className='text-orange-100 md:text-xl text-[1rem] text-center font-regular max-w-[700px] '>My name is Timothy Jonah, I am a fullstack developer with 5+years experience.</p>
                <Particles parallaxRef={parallaxRef} />
            </div>
                
        </div>
    )
}