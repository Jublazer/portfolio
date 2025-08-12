"use client"

import character from '../../public/assets/Character.png'
import { TypeAnimation } from 'react-type-animation'
import { useRef } from "react"
import { Particles } from "./ui/Particles"
import Image from 'next/image'
import Link from 'next/link'
import StarBorder from './gsap/StarBorderButton'

export const Hero = ()=>{
    const parallaxRef = useRef<HTMLDivElement>(null)
    return(
        <div className='overflow-x-clip relative mt-15 w-[78rem] min-h-screen pt-12 flex items-center justify-center gap-6'>
            <div className='container mx-auto space-y-6 flex flex-col justify-center items-center' ref={parallaxRef}>
                <Image 
                    src={character}
                    alt='Character'
                    className='mx-auto '
                    width={250}
                />
                <div className="w-[80%] rounded-lg shadow-lg absolute mx-auto space-y-6 h-100 top-90 z-101 bg-gradient-to-t from-[#131212ff]  to-transparent">
                    
                    <div className='flex items-center justify-center flex-col space-y-2'>

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

                            <br />
        
                            <div className="flex justify-center items-center gap-10">
                            <Link href={'/projects'}>
                                <StarBorder
                                    as="button"
                                    className="custom-class cursor-pointer"
                                    color="orange"
                                    speed="5s"
                                    >
                                    View My Works
                                </StarBorder>
                                </Link>

                            <Link href={'/contact'}>
                                <StarBorder
                                    as="button"
                                    className="custom-class cursor-pointer"
                                    color="cyan"
                                    speed="5s"
                                    >
                                    Work with me
                                </StarBorder>
                                </Link>
                            </div>
                    </div>
                </div>
                <Particles parallaxRef={parallaxRef} />
            </div>
                
        </div>
    )
}