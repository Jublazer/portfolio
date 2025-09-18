import { DollarSign, Users } from 'lucide-react'
import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import StatCard from './StatCard'
import { GrOrderedList } from 'react-icons/gr'
import { RiServiceFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import ServicesChart from './ServicesChart'
const Overview = () => {
  return (
    <div className='w-full flex-1 overflow-auto relative z-10'>
            <main className='max-w-7xl mx-auto p-y-4 p-x-4 lg:p-x-8'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{opacity: 1, y:0}}
                    transition={{ duration: 0.5 }}
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-4'>
                        <StatCard name={'Total Sales'} icon={TbCurrencyNaira} value={'500,000+'}  />
                        <StatCard name={'Users'} icon={Users} value={'2,000+'}  />
                        <StatCard name={'Services'} icon={RiServiceFill} value={'10'}  />
                        <StatCard name={'Orders'} icon={GrOrderedList} value={'60,000+'}  />
                </motion.div>

                <div className='grid sm:grid-cols-1 lg:grid-cols-2 mb-4'>
                    <ServicesChart />
                </div>
            </main>
    </div>
  )
}

export default Overview