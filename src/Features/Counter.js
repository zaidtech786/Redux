import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    counter:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        INCREMENT_COUNTER : (state,action) => {state.counter = state.counter + 1},
        DECREMENT_COUNTER :(state,action) => {state.counter = state.counter - 1}
    }
})

export const {INCREMENT_COUNTER,DECREMENT_COUNTER} = counterSlice.actions
export default counterSlice.reducer;