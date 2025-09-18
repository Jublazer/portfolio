import React from 'react'

type Program = {
  // Define the properties of Program according to your data structure
  id: string;
  name: string;
  // Add other fields as needed
}

function ProgramList({
    programs, 
    onChange, 
    onDelete}:any) {
  return (
    <div className='w-[400px] bg-gray-400/10 rounded-lg border flex flex-col gap-3 p-5 justify-center items-center h-[200px]'>
        <h1>ProgramList</h1>
        {
            programs.map((item: Program) => {
                <div key={item.id} className='w-full flex flex-row gap-3 justify-between items-center'>
                    {item.name}
                </div>
            })
        }
    </div>
  )
}

export default ProgramList