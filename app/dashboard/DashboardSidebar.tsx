import React from 'react'
import { GiHelp } from "react-icons/gi"
import { BsBell } from "react-icons/bs"
import { BiCart, BiMessage } from "react-icons/bi"
import { TbCurrencyNaira } from "react-icons/tb"
import {RiServiceFill} from "react-icons/ri"
import { FaUsers } from "react-icons/fa"
import { GrDashboard } from "react-icons/gr"
import { useState } from 'react'
import Link from 'next/link'
import { IoClose, IoMenuOutline, IoSettingsOutline } from 'react-icons/io5'

interface SidebarProps {
    onTabChange: (tabId: number) => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ onTabChange }) => {
     const [activeTab,setActiveTab] = useState(1)
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sideMenuList = [
        {
            id: 1,
            title:'Overview',
            href:'dashboard',
            icon: 'GrDashboard'
        },
        {
            id: 2,
            title:'Clients',
            href:'clients',
            icon: 'FaUsers'
        },
        {
            id: 3,
            title:'Services',
            href:'services',
            icon: 'RiServiceFill'
        },
        {
            id: 4,
            title:'Transactions',
            href:'transactions',
            icon: 'TbCurrencyNaira'
        },
        {
            id: 5,
            title:'Orders',
            href:'oders',
            icon: 'BiCart'
        },
        {
            id: 6,
            title:'Messages',
            href:'messages',
            icon: 'BiMessage'
        },
        {
            id: 7,
            title:'Notificaions',
            href:'notifications',
            icon: 'BsBell'
        },
        {
            id: 8,
            title:'Help',
            href:'Help',
            icon: 'GiHelp'
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


    // Map icon string to actual component
    const iconMap: { [key: string]: React.ElementType } = {
        GrDashboard: GrDashboard,
        FaUsers: FaUsers,
        RiServiceFill: RiServiceFill,
        TbCurrencyNaira: TbCurrencyNaira,
        BiCart: BiCart,
        BiMessage: BiMessage,
        BsBell: BsBell,
        GiHelp: GiHelp,
    };

  return (
    <section className={`flex flex-col border-r-1 border-[#2f2f2f] items-center justify-between ${isSidebarOpen ? 'max-w-[150px]' : 'max-w-[80px]'} h-screen bg-[#1e1e1e]/30`}>
                    <div className="flex flex-col items-center justify-start w-full ">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
                            {isSidebarOpen ? <IoClose size={20} color="white" /> : <IoMenuOutline size={20} color="white" />}
                        </button>
                        {
                            sideMenuList.map((item) => {
                                const IconComponent = iconMap[item.icon];
                                return (
                                    <Link href={`#`} key={item.id} onClick={() => {handleActiveTab(item.id); onTabChange(item.id)}} className="w-full ">
                                        <div className={`${activeTab === item.id ? 'bg-[#1e1e1e]' : ''} w-full p-4 flex flex-row justify-start gap-5 border-b-1 border-[#2f2f2f] items-center cursor-pointer hover:opacity-[0.3]`} >
                                            {IconComponent && <IconComponent size={20} color="white" />}
                                            {
                                                isSidebarOpen && (
                                                                                                <span className="flex flex-row gap-2 text-xs justify-start items-center"> {item.title}</span>
                                                )
                                            }
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>

                    <div className="flex flex-row items-center border-t-1 border-b-1 border-[#2f2f2f] w-full p-3 justify-start bg-[#1e1e1e]">
                        <Link href={'#'}><span className="flex flex-row gap-2 text-sm justify-start items-center"> <IoSettingsOutline size={20} color="white" /> Logout User</span></Link>
                    </div>
                </section>
  )
}

export default DashboardSidebar