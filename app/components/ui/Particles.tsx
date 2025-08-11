import React, {useEffect, RefObject, useState} from "react";
import { MouseParallax } from 'react-just-parallax';
import { Circles } from "./Circles";
import particle1 from "../../../public/assets/p1.png";
import particle2 from "../../../public/assets/p2.png";
import mobilePhn from "../../../public/assets/Mobile-App-1.jpg"

interface ParticlesProps {
    parallaxRef: RefObject<HTMLDivElement>;
}

export const Particles: React.FC<ParticlesProps> = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true);
    }, []);

    return(
        <div className="absolute top-[-45%] left-[50%] w-78rem -translate-x-1/2">
            <Circles />
            
        </div>
    )
}