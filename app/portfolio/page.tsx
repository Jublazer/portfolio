"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import StarBorder from '../components/gsap/StarBorderButton';
import ScrollFloat from '../components/gsap/ScrollFloat';
import { GlassDiv } from '../components/GlassDiv';
import pc from "@/public/assets/Pic-2.png"
import mobilePic from "@/public/assets/Mobile-App-1.jpg"

const projects = [
    {
        id: 1,
        title: "Web-app Project using Nextjs",
        image: pc.src,
        category: "Web Development",
        desc: "Ready to Build Something Together? Let’s talk about your next big idea. Whether you need a brand overhaul, an app MVP, or strategic coaching I’d love to hear from you."
    },
    {
        id: 2,
        title: "Mobile App Dev Project Using React-Native",
        image: mobilePic.src,
        category: "App Development",
        desc: "..."
    },
//     { 
//   id: 1, 
//   title: "Modern Web Development Projects", 
//   image: '', 
//   category: "Web Development", 
//   desc: "Developed responsive, high-performance websites using React, Node.js, and MongoDB. Projects include e-commerce sites, SaaS dashboards, and custom CMS platforms." 
// },
// { 
//   id: 2, 
//   title: "Cross-Platform App Development", 
//   image: '', 
//   category: "App Development", 
//   desc: "Built scalable mobile and desktop applications using Flutter and React Native. Deployed apps on iOS, Android, and web with seamless user experience and native performance." 
// },
// { 
//   id: 3, 
//   title: "UI/UX Design for Tech Products", 
//   image: '', 
//   category: "UI/UX", 
//   desc: "Designed user-centric interfaces with Figma and Adobe XD. Focused on usability, accessibility, and smooth user flows for startups, dashboards, and mobile apps." 
// },
// { 
//   id: 4, 
//   title: "Tech Mentoring & Coding Coaching", 
//   image: '', 
//   category: "Tech/Coding Coaching", 
//   desc: "Provided 1-on-1 mentoring and group sessions on JavaScript, Python, and full-stack development. Helped aspiring developers land jobs and build real-world projects." 
// }

];

export default function Portfolio (){
    return(
        <section className='container flex justify-center items-center mx-auto w-full min-h-[300vh]'>
            <div className='relative z-5 w-full place-items-center mx-auto'>
                    {
                        projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className='border border-white/20 flex flex-col md:flex-row  text-white rounded-2xl bg-gradient-to-r from-[#0d0d0e] via-[#303131] to-[#212122] md:p-10 p-3 justify-center mb-16 w-[98%] md:w-[1100px] sticky top-25 ' 
                            >
                                <div className="relative md:p-10 p-3 flex md:flex-row flex-col items-center gap-5 w-full">
              
                                    <GlassDiv props="md:w-full w-[100%] h-full overflow-x-clip overflow-y-clip">
                                        
                                        <img src={project.image} alt="" className="" />

                                    </GlassDiv>
                                    <div className="flex flex-col md:flex-col">
                                        <h1 className="text-2xl font-bold">{project.title}</h1>

                                        {/* <h2 className="text-2xl font-bold">My Projects</h2> */}
                                        <p className="text-sm text-gray-300 max-w-[700px]">{project.desc}</p>
                                            <br />
                                            <Link href={'/portfolio'}>
                                            <StarBorder
                                                as="button"
                                                className="custom-class cursor-pointer"
                                                color="orange"
                                                speed="5s"
                                                >
                                                View My Works
                                            </StarBorder>
                                            </Link>
                                    </div>
                                                    
                                </div>

                            </motion.div>
                        ))
                    }

            </div>
            
        </section>
    )

}