import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  //useState is used for ui updation the syntax of useState is like we have to let an array [var,function] the function will update the valaue of var automatic and the const inside the usestate(0) this zero is the default value

  // let counter = 5;
  const addValue = () => {
    console.log("the counter value isnc. by 1", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  }
  const removeValue = () => {
    if(counter===0){
      console.log("the value cannot be negative");
    }else{
      console.log("the counter value desc. by 1", counter);
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Hello 02_counter_project</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
