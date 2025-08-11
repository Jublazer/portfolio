"use client"

import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import ScrollFloat from './components/gsap/ScrollFloat';
import SplashCursor from "./components/gsap/SplashCursor";
import StarBorder from "./components/gsap/StarBorderButton";

export default function Home() {
  return (
    <main className="font-sans flex items-center justify-center w-full flex-col p-0 min-h-screen">
      <div className="w-full">
        {/* Navbar */}
        <Navbar />
        
      </div>

      <div className="min-h-[100vh]">
        {/* Body Section */}
        
          <ScrollFloat
            animationDuration={5}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Promise My Love
          </ScrollFloat>
          <StarBorder
            as="button"
            className="custom-class cursor-pointer"
            color="cyan"
            speed="5s"
          >
            View My Works
          </StarBorder>

          <SplashCursor />
      </div>

      <div className="w-full">
        {/* footer seciton */}
        <Footer />
      </div>
    </main>
  );
}
