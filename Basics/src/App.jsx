import { useState } from 'react'

function App() {
  let [counter, setCounter] = useState(15);

  const increaseCounter = () => {
    if(counter !== 20){
    setCounter(counter + 1);
    }
  }

  const decreaseCounter = () => {
    if(counter !== 0){
    setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>First Counter is : {counter}</h1>
      <h2>Second Counter is : {counter}</h2>
      <button onClick={increaseCounter}>Increase Count</button>
      <button onClick={decreaseCounter}>Increase Count</button>
    </>
  )
}

export default App