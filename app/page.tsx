"use client"

import Link from "next/link";
import { Hero } from "./components/Hero";
import pc from '../public/assets/Pic-2.png'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  
  return (
    <main className="@container flex flex-col items-center justify-center w-full flex-col">
    
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
          {/* Hero Section */}

          <Hero />

        <section
          className="flex justify-center items-center flex-col min-h-screen w-full mt-20 relative rounded-lg"
          style={{
            backgroundImage: "url('/assets/bg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark background overlay */}
          <div className="absolute inset-0 bg-white/60 pointer-events-none z-0" />
            
            <div className="w-full p-2 md:p-25 flex flex-col items-center justify-center md:flex-row gap-8">
                  
                  <div className="md:h-[550px] md:w-[400px] h-[500px] w-[300px] bg-white/70 p-4 flex backdrop-blur-sm flex-col items-start justify-start rounded-4xl shadow-lg shadow-xl  mb-10">
                      <div className="flex flex-row items-center justify-center w-full">
                          <span className="flex block items-center justify-center p-8 rounded-full bg-gray-100 text-orange-950 text-xl">01</span> <hr className="border border-[1px] border-orange-950 mx-4 w-full" />
                      </div>
                      <div className="flex flex-col items-start mt-5 justify-center w-full">
                        <h2 className="text-[1.5rem] text-orange-950 font-300">Web & Mobile Development </h2><br />
                        <p className="text-[0.7rem] text-gray-800/90 max-w-[700px]">Crafting seamless digital experiences across platforms </p>                
                        <br />
                        <hr className="border border-1 border-gray-300 w-full" /><br />
                        <p className="text-[0.7rem] text-gray-800/90 max-w-[700px]">From responsive websites to dynamic mobile applications, I specialize in building intuitive, high-performance solutions that meet real-world needs. </p>
                        <hr className="border border-1 border-gray-300 w-full" /><br />
                        <p className="text-[0.7rem] text-gray-800/90 max-w-[700px]">I work with modern frameworks and tools to ensure every product is optimized for speed, accessibility, and cross-device compatibility. </p>
                      </div>

                      <button className="mt-4 px-6 py-2 bg-white text-orange-950 rounded-full shadow-md hover:bg-gray-100 transition">Learn More</button>
                    
                  </div>

                  <div className="md:h-[550px] md:w-[400px] h-[500px] w-[300px] backdrop-blur-md bg-orange-600 p-4 flex flex-col items-start justify-start rounded-4xl shadow-lg shadow-xl  mb-10">
                      <div className="flex flex-row items-center justify-center w-full">
                          <span className="flex block items-center justify-center p-8 rounded-full bg-white text-orange-950 text-xl">02</span> <hr className="border border-[1px] border-whitw-950 mx-4 w-full" />
                      </div>
                      <div className="flex flex-col items-start mt-5 justify-center w-full">
                        <h2 className="text-[1.5rem] text-orange-950 font-300"> UI/UX Design</h2>
                        <p className="text-[0.7rem] text-gray-800/90 max-w-[700px]">Designing interfaces that feel as good as they look</p>
                         <hr className="border border-1 border-gray-300 w-full" /><br />
                        <p className="text-[0.7rem] text-gray-800/90 max-w-[700px]">I believe great design is invisible—it guides users effortlessly while delighting them at every turn. My UI/UX approach blends aesthetics with usability, ensuring that every screen serves a purpose and every interaction feels natural. </p>                
                      </div>

                      <button className="mt-4 px-6 py-2 bg-white text-orange-950 rounded-full shadow-md hover:bg-gray-100 transition">Learn More</button>

                  </div>
            </div>
            
        </section>
          
      </div>       
    </main>
  );
}
