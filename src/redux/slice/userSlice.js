import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        value: null || localStorage.getItem('token')
    },
    reducers:{
        login: () =>{
            let token = localStorage.setItem('token', 'admin')
            return {
                value: localStorage.getItem('token'), token
            }
        },
        loginUser : (action) => {
            return {
                value: localStorage.getItem('token')
            }
        }
    }
})

export const {login, loginUser} = userSlice.actions
export const userSelector = state => state.user.value
export default userSlice.reducer