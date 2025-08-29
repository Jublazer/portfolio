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
          className="flex justify-center items-center flex-col min-h-screen w-full mt-20 mb-20 relative"
          style={{
            backgroundImage: "url('/assets/bg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark background overlay */}
          <div className="absolute glass inset-0 bg-black/90 pointer-events-none z-0" />
          
            {/* Body Section */}
            
        </section>
          
      </div> 
      <Footer />         
    </main>
  );
}
