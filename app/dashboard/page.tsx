"use client"

import { useState } from "react"
import Overview from "./overview/page"
import DashboardSidebar from "./DashboardSidebar"
import avater from '../../public/assets/Character.png'
import nigeria from '../../public/assets/nigeria.png'
import Image from "next/image"


export default function dashboard(){
    const [activeTab,setActiveTab] = useState(1)
    
    return(
        <div className="w-full justify-center items-center p-0 m-0 flex flex-col h-screen mt-30">
            {/* dashboard menu */}
            <div className="flex flex-row justify-between items-center w-full p-5 bg-[#1e1e1e]/40 border-b-1 border-t-1 border-[#2f2f2f]">
                <h1 className="w-full text-bold">Hi, Timmi!</h1>
                <div className="flex flex-row gap-5 justify-end items-center w-full">
                    <Image src={nigeria} alt="Nigeria Flag" className="w-10 h-5"/>
                    <Image src={avater} alt="User Avatar" className="rounded-full w-10 h-10 border border-white" />
                </div>
            </div>

            <main className="flex flex-row items-center justify-center w-full">
                {/* Left side bar */}
                <DashboardSidebar onTabChange={setActiveTab} />
                {/* Content body */}
                <section className="flex p-10 flex-row h-screen bg-[#1e1e1e]/40 justify-start max-w-7xl w-full gap-10">
                    <div className="w-full flex flex-row gap-5 justify-start">
                                {/* Add Program */}
                                {
                        
                                    activeTab === 1 ? (
                                        <>
                                            {/* overview here */}
                                            <Overview />
                                        </>
                                    ) : activeTab === 2 ? (
                                        <>
                                            <h1>Clients</h1>
                                        </>
                                    ) : activeTab === 3 ? (
                                        <>
                                            <h1>Services</h1>

                                        </>
                                    ) : activeTab === 4 ? (
                                        <>
                                            <h1>Transactions</h1>

                                        </>
                                    ) : activeTab === 5 ? (
                                        <>
                                            <h1>Orders</h1>

                                        </>
                                    ) : activeTab === 6 ? (
                                        <>
                                            <h1>Messages</h1>

                                        </>
                                    ) : activeTab === 7 ? (
                                        <>
                                            <h1>Notifications</h1>

                                        </>
                                    ) : (
                                        <>
                                            <h1>Help</h1>
                                        </>
                                    ) 
                                }
                    </div>
                    
                </section>
            </main>

        </div>
    )
}