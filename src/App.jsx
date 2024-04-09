import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch,useSelector} from "react-redux";
import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "./Features/Counter";
import Todo from './Todo';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  return (
    <>
    {/* Counter App */}
      {/* <h1>{counter.counter}</h1>
      <button style={{margin:"10px"}} onClick={() => dispatch(INCREMENT_COUNTER())}>Increment</button>
      <button onClick={() => dispatch(DECREMENT_COUNTER())}>Decrement</button> */}

{/* //Todo App */}
      <Todo/>   
    </>
  )
}

export default App
