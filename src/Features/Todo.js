import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todo : [{id:1,content : "Zaid Siddiqui"}]
}
export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action) => {
            state.todo.push({id:nanoid(),content : action.payload})
        },
        removeTodo : (state,action) => {
            state.todo = state.todo.filter( todo => todo.id != action.payload)
        },
        updateTodo : (state,action) => {
            const index = state.todo.findIndex(todo => todo.id === action.payload.id);
            state.todo[index].content = action.payload.content;
        }
    }

})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions;
export default todoSlice.reducer;