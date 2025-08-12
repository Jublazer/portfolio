import React, {useEffect, RefObject, useState} from "react";
import { MouseParallax } from 'react-just-parallax';
import { Circles } from "./Circles";
import particle1 from "../../../public/assets/p1.png";
import particle2 from "../../../public/assets/p2.png";
import mobilePhn from "../../../public/assets/Mobile-App-1.jpg"

interface ParticlesProps {
    parallaxRef: RefObject<HTMLDivElement | null>;
}

export const Particles: React.FC<ParticlesProps> = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false)
    
    useEffect(()=>{
        setMounted(true);
    }, []);

    return(
        <div className="absolute z-[-10] top-[-45%] left-[50%] w-[78rem] -translate-x-1/2 aspect-square">
            <Circles />

            <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-[17%] right-[8%] origin-bottom transition-transform duration-500 ease-out">
                    <img 
                        src={particle1.src} 
                        alt="Particle1"
                        className={`w-64 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}    
                    />
                </div>

                <div className="absolute bottom-[17%] left-[4%] origin-bottom transition-transform duration-500 ease-out">
                    <img 
                        src={particle2.src} 
                        alt="Particle1"
                        className={`w-64 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}    
                    />
                </div>

                <div className="absolute top-[32%] right-[60%] origin-bottom transition-transform duration-500 ease-out">
                    <img 
                        src={mobilePhn.src} 
                        alt="Particle1"
                        className={`w-20 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}    
                    />
                </div>

                <div className="absolute bottom-[25%] right-[25%] origin-bottom transition-transform duration-500 ease-out">
                    <img 
                        src={mobilePhn.src} 
                        alt="Particle1"
                        className={`w-10 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}    
                    />
                </div>
            </MouseParallax>
            
        </div>
    )
}