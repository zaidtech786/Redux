export const incrementCounter = (state,action) => {
    state.counter = state.counter + 1;
}
export const decrementCounter = (state,action) => {
    state.counter = state.counter - 1;
}