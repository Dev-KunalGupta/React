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
      <h3>Third Counter is : {counter}</h3>
      <h4>Fourth Counter is : {counter}</h4>
      <h5>Fifth Counter is : {counter}</h5>
      <button onClick={increaseCounter}>Increase Count</button>
      <br />
      <button onClick={decreaseCounter}>Decrease Count</button>
    </>
  )
}

export default App