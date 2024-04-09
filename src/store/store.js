import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../Features/Counter"
import todoReducer from "../Features/Todo"

export const store = configureStore({
    reducer: {
        todo : todoReducer,
        counter: counterReducer ,
    }

    
})