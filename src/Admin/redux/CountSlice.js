import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState, 
    reducers: {
        increase: (a) => {
                a.value += 1   
        },
        decrease: (a) => {
            if (a.value > 0) {
                a.value -= 1   
            }
        }
    }
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
