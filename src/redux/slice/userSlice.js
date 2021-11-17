import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        token: null || localStorage.getItem('token')
    },
    reducers:{
        login: () =>{
            return {
                token: localStorage.getItem('token')
            }
        },
    }
})

export const {login} = userSlice.actions
export const userSelector = state => state.user.token
export default userSlice.reducer