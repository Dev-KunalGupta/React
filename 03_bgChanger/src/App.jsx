import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className='h-screen w-screen' style={{ backgroundColor: color }}>
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-full px-2'>
        <button onClick={() => setColor("Red")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Red" }}>Red</button>
        <button onClick={() => setColor("Blue")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Blue" }}>Blue</button>
        <button onClick={() => setColor("Green")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Green" }}>Green</button>
        <button onClick={() => setColor("Purple")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Purple" }}>Purple</button>
        <button onClick={() => setColor("Pink")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Pink" }}>Pink</button>
        <button onClick={() => setColor("Black")}
        className='text-white px-5 py-2 rounded-full m-2' style = {{backgroundColor: "Black" }}>Black</button>
      </div>
    </div>
  )
}

export default App