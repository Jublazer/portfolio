import React from 'react'

type Program = {
  id: string
  name: string
}

type ProgramListProps = {
  programs: Program[]
  onChange?: (id: string, name: string) => void
  onDelete?: (id: string) => void
}

function ProgramList({ programs }: ProgramListProps) {
  return (
    <div className='w-[400px] bg-gray-400/10 rounded-lg border flex flex-col gap-3 p-5 justify-center items-center h-[200px]'>
        <h1>ProgramList</h1>
        {
            programs.map((item: Program) => {
                return (
                  <div key={item.id} className='w-full flex flex-row gap-3 justify-between items-center'>
                      {item.name}
                  </div>
                )
            })
        }
    </div>
  )
}

export default ProgramList