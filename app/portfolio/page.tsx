"use client"
import React from 'react'
import pic1 from '../../public/assets/Pic-2.png'
import { motion } from 'framer-motion'

const projects = [
    {
        id: 1,
        title: "+++",
        image: pic1,
        category: "Web Development"
    },
    {
        id: 2,
        title: "+++",
        image: pic1,
        category: "App Development"
    },
    {
        id: 3,
        title: "+++",
        image: pic1,
        category: "UI/UX Design"
    },
    {
        id: 4,
        title: "+++",
        image: pic1,
        category: "Branding"
    },
    {
        id: 5,
        title: "+++",
        image: pic1,
        category: "Business/Tech Coaching"
    },
];

export default function Portfolio (){
    return(
        <section className='py-16 container mx-auto w-full min-h-[300vh]'>
            {
                projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className='border border-white/20 flex flex-col md:flex-row  text-white rounded-3xl bg-gradient-to-r from-[#0d0d0e] via-[#303131] to-[#212122] p-12 justify-center items-start mb-16 w-[300px] md:w-[1100px] sticky top-28 ' 
                    >
                        
                    </motion.div>
                ))
            }
            
        </section>
    )

}