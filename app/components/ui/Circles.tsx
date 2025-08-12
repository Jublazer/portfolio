import { div } from "framer-motion/client";
import React from "react";

export const Circles = ()=>{
    return(
        <>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[30rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[25rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[17rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[10rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[35rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <div className="aspect-square absolute opacity-30 top-1/2 left-1/2 w-[40rem] border rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        </>
    )
}