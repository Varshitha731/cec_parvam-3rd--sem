import {useState} from "react";
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </>
  )
}

export default App
