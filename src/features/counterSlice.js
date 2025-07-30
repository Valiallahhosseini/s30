import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {value: 0}, 
    reducers : {
        incerement: (state) => {state.value += 1}, 
        decrement: (state) => {state.value -= 1}
        reset 
    }
})
'this is a new line '