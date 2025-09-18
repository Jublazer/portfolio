import React, { useReducer} from 'react'
import AddProgram from './AddProgram'
import ProgramList from './ProgramList'

function Programs() {
  const [programs, dispatch] = useReducer(programsReducer, innitialPrograms)

  return (
    <div className='w-full '>
      
      <h2 className='mb-10 text-2xl font-extrabold'>Programs</h2>
      <div className='flex flex-row justify-start'>
          
          <div>
            <ProgramList />
          </div>
          
          <div>
            <AddProgram />
          </div>
      </div>

    </div>

  )
}

export default Programs