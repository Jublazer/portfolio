import React, { useState } from 'react'
import { IoAddCircle } from 'react-icons/io5'

function AddProgram({onAddProgram}:any) {
    const [progs, setProgs] = useState('')
  return (
    <div className='w-[400px] bg-gray-400/10 rounded-lg border flex flex-col gap-3 p-5 justify-center items-center h-[200px]'>
        {
            progs
        }
        <input type="text"
            onChange={e=>setProgs(e.target.value)}
            placeholder='Add Program'
            value={progs}
            className='w-full border p-2 rounded-sm'
        />
        <button onClick={()=>{
            onAddProgram(progs)
            setProgs('')
            }} className='w-full flex flex-row gap-2  justify-center items-center bg-white/40 p-2 rounded-sm bordered hover:scale-110 transition-scale duration-300 ease-in-out cursor-pointer'> <IoAddCircle size={15} /> Add Program</button>

    </div>
  )
}

export default AddProgram