"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

type StatCardProps = {
  name: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  value: number | string;
};

const StatCard: React.FC<StatCardProps> = ({ name, icon: Icon, value }) => {
  return (
    <div className='w-full p-y-5 p-x-5'>
        <motion.div className='bg-[#2f2f2f] rounded-lg p-5 flex flex-col justify-center items-start gap-3'
            whileHover={{y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)'}}
            >
            <span className='p-y-4 p-x-5 flex flex-row gap-2 text-gray-400'>
                <Icon size={20} color={'white'} />
                {name}
            </span>
            <h1 className='text-3xl font-bold'>{value}</h1>

        </motion.div>
    </div>
  )
}

export default StatCard