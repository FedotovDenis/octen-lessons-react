import './App.css'
import {useState} from "react";

const App = () => {

    let [counter, setCounter] = useState(0);

  return (
    <div>

        <h1>{counter}</h1>

        <button onClick={() => {
            setCounter(++counter)
        }}>increment</button>

        <button onClick={() => {
            setCounter(counter--)
        }}>decrement</button>
    </div>
  )
}

export default App
