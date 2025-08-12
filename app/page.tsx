"use client"

import Link from "next/link";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar"
import Dock from "./components/gsap/DockMenu";
import MagicBento from "./components/gsap/MagicBento";
import ScrollFloat from './components/gsap/ScrollFloat';
import SplashCursor from "./components/gsap/SplashCursor";
import StarBorder from "./components/gsap/StarBorderButton";
import TiltedCard from "./components/gsap/TiltedCard";
import { Circles } from "./components/ui/Circles";


export default function Home() {
  
  return (
    <main className="font-sans flex items-center justify-center w-full flex-col p-0 min-h-screen">
      

      <div className="min-h-screen w-full flex flex-col justify-center items-center">
          {/* Hero Section */}

          <Hero />

        <section className="flex justify-center items-center flex-col min-h-screen">
            {/* Body Section */}
            <ScrollFloat
                animationDuration={5}
                ease='back.inOut(2)'
                scrollStart='top bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.06}
              >
                My Projects
              </ScrollFloat>
              
              {/* <SplashCursor /> */}

              {/* <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              /> */}


              {/* <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                  </p>
                }
              /> */}
        </section>
          
      </div>          
    </main>
  );
}
