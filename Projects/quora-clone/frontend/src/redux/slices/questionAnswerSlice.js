import { createSlice } from "@reduxjs/toolkit";

const questionAnswerSlice = createSlice({
    name: "questionAnswer",
    initialState: [],
    reducers: {
        addData : (state,action) => {
            state = [...action.payload.data];
            return state;
            // console.log(action.payload.data)
        }
    }
})
export const {addData} = questionAnswerSlice.actions;
export default questionAnswerSlice.reducer;