import React, { useReducer} from 'react'
import AddProgram from './AddProgram'
import ProgramList from './ProgramList'

type Program = {
  id: string
  name: string
}

type Action =
  | { type: 'add'; name: string }
  | { type: 'change'; id: string; name: string }
  | { type: 'delete'; id: string }

const innitialPrograms: Program[] = []

function programsReducer(state: Program[], action: Action): Program[] {
  switch (action.type) {
    case 'add': {
      const name = action.name.trim()
      if (!name) return state
      return [...state, { id: `${Date.now()}`, name }]
    }
    case 'change':
      return state.map((p) => (p.id === action.id ? { ...p, name: action.name } : p))
    case 'delete':
      return state.filter((p) => p.id !== action.id)
    default:
      return state
  }
}

function Programs() {
  const [programs, dispatch] = useReducer(programsReducer, innitialPrograms)

  return (
    <div className='w-full '>
      
      <h2 className='mb-10 text-2xl font-extrabold'>Programs</h2>
      <div className='flex flex-row justify-start'>
          
          <div>
            <ProgramList
              programs={programs}
              onChange={(id: string, name: string) =>
                dispatch({ type: 'change', id, name })
              }
              onDelete={(id: string) => dispatch({ type: 'delete', id })}
            />
          </div>
          
          <div>
            <AddProgram onAddProgram={(name: string) => dispatch({ type: 'add', name })} />
          </div>
      </div>

    </div>

  )
}

export default Programs