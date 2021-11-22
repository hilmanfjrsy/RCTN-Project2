import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        token: null || localStorage.getItem('token')
    },
    reducers:{
        getToken: (state,payload) =>{
            const newToken = localStorage.setItem("token", payload.payload) || localStorage.getItem("token")
            return {
                token: newToken
            }
        },
        removeToken: () => {
            const newToken = localStorage.removeItem("token") || null
            return{
                token: newToken
            }
        }
    }
})

export const {getToken, removeToken} = userSlice.actions
export const userSelector = state => state.user.token
export default userSlice.reducer