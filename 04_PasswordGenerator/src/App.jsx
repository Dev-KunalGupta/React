import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNum, setIncludeNum] = useState(false)
  const [includeChar, setIncludechar] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <>
      <div className='h-40 w-full max-w-md shadow-md rounded-xl bg-gray-700 text-orange-500 mx-auto my-8 px-6 py-5'>
      <h1 className='text-3xl text-center font-bold text-white mb-5 '>Password Generator</h1>
        <div className="flex bg-white shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white px-4 py-1 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={4}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={e => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNum}
              id='checkNum'
              onChange={prev => !prev}
            />
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeChar}
              id='checkChar'
              onChange={prev => !prev}
            />
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App