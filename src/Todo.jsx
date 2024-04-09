import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { addTodo,removeTodo ,updateTodo} from './Features/Todo';

const Todo = () => {
    const [input,setInput] = useState("");
    const todoList = useSelector(state => state.todo.todo);
    const dispatch = useDispatch();
    const [state,setState] = useState(false);
    const [id,setId] = useState("")
    console.log("Todo : ",todoList.todo)

    const EditData = (id,content) => {
        console.log(id)
        setInput(content)
        setState(true);
        setId(id)
       
    }
    const updateData = () => {
        setState(false)
        dispatch(updateTodo({id : id,content : input}))
    }
    

    if (!todoList) {
        return <div>Loading...</div>; // or any loading indicator
      }
      
  return (
    <div>
        <h1>Todos</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        {
            state
            ?
            <button onClick={() => updateData()}>Edit</button>
            :
            <button onClick={() => {dispatch(addTodo(input)),setInput("")}}>Add</button>
        }
        {
            todoList.map(todo => {
                return(
                    <>
                     <h3>{todo.content}</h3>
                     <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                     <button onClick={() => EditData(todo.id,todo.content)}>Edit</button>
                    </>
                )
            })
        }

    </div>
  )
}

export default Todo