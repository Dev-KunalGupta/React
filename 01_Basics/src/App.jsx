import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15);

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

  /*
  setCounter(callback) -> Hidden feature of setCounter i.e. it takes callback function.
  Now, Interview Question ----------------------->
  
  const increaseCounter = () => {
    if(counter !== 20){
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    }
  }

  const decreaseCounter = () => {
    if(counter !== 0){
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    setCounter(counter - 1);
    }
  }

  They all just increase or decrease only one why?
  Bcoz useState jitne bhi updates bhejne hai UI ya variable mai batches mai bhejta hai isiliye now after fibre we got more control over it.
  To do this have use the hidden feature of setCounter callback as callbacks are executed one by one.

  const increaseCounter = () => {
    if(counter !== 20){
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    }
  }

  const decreaseCounter = () => {
    if(counter !== 0){
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1); it's like ki yaha hum pehle previous state le rhe hai then update kar rhe.
    }
  }

*/

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