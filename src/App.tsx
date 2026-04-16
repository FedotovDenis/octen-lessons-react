import { LeftBranch } from './components/LeftBranch';
import { RightBranch } from './components/RightBranch';
import { init, MyContext } from './context/MyContext';
import { useState } from 'react';
import './App.css';


function App() {

  const [counter, setCounter] = useState<number>(init.counterValue);
  return (
    <>
    <MyContext.Provider value={{
        counterValue: counter,
        increment: (val: number) => { 
            setCounter(val + 1);
        }}}>

        <LeftBranch />
        <RightBranch />
    </MyContext.Provider>
    </>
  )
}

export default App
