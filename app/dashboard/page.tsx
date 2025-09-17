"use client"

import { div } from "framer-motion/client"
import Link from "next/link"
import { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"

export default function dashboard(){
    const [activeTab,setActiveTab] = useState(1)
    const sideMenuList = [
        {
            id: 1,
            title:'Overview',
        },
        {
            id: 2,
            title:'User Management'
        },
        {
            id: 3,
            title:'Programs'
        },
        {
            id: 4,
            title:'Transactions'
        },
    ]

    type sideMenuListItem ={
        id: number,
        title:string,
        onclick: Function
    }

    const handleActiveTab = (e:number)=>{
        setActiveTab(e);
    } 

    return(
        <div className="w-full justify-center items-center p-0 m-0 flex flex-col h-screen mt-30">
            {/* dashboard menu */}
            <div className="container-full w-full p-5 bg-[#0F172A]/40 border-b-1 border-t-1">
                <h1>Hi, Timmi!</h1>
            </div>

            <main className="flex flex-row items-center justify-center w-full">
                {/* Left side bar */}
                <section className="flex flex-col border-r-1 items-center justify-between w-[15%] h-screen bg-[#0F172A]/30">
                    <div className="flex flex-col items-center justify-start w-full ">
                        {
                            sideMenuList.map((item)=>(
                                <div key={item.id} onClick={()=>handleActiveTab(item.id)} className={`${activeTab === item.id ? 'bg-[#0F172A]' : ''} w-full p-3 flex flex-row justify-start border-b-1 items-center cursor-pointer hover:opacity-[0.3]`}>
                                    <span className="flex flex-row gap-2 text-xs justify-start items-center"> <IoSettingsOutline size={15} color="white" /> {item.title}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex flex-row items-center border-t-1 border-b-1 w-full p-3 justify-start bg-rgba(16, 48, 20, 0.64)">
                        <Link href={'#'}><span className="flex flex-row gap-2 text-sm justify-start items-center"> <IoSettingsOutline size={20} color="white" /> Logout User</span></Link>
                    </div>
                </section>

                {/* Content body */}
                <section className="flex p-10 flex-row items-center h-screen bg-[#0F172A]/20 justify-start w-[85%]">
                    <h1>Main body here</h1>
                </section>
            </main>

        </div>
    )
}