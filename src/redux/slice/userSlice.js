import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        token: null || localStorage.getItem('token')
    },
    reducers:{
        getToken: (state,payload) =>{
            const newToken = localStorage.setItem("token", payload.payload)
            return {
                token: newToken||localStorage.getItem("token")
            }
        },
    }
})

export const {getToken} = userSlice.actions
export const userSelector = state => state.user.token
export default userSlice.reducer