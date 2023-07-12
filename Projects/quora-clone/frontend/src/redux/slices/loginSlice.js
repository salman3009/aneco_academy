import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        userName: "",
        email: ""
    },
    reducers:{
        setLogin: (state, action) => {
           const obj = {
            userName: action.payload.userName,
            email: action.payload.email
           }

           return obj;
        }
    }
})

export const {setLogin} = loginSlice.actions;
export const {selectLogin} = (state) => state.login;
export default loginSlice.reducer;