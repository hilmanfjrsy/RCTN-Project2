import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        token: null || localStorage.getItem('token')
    },
    reducers:{
        getToken: (state,payload) =>{
            localStorage.setItem("token", payload.payload)
            return {
                token: payload.payload
            }
        },
        removeToken: () => {
            localStorage.removeItem("token")
            return{
                token: null 
            }
        }
    }
})

export const {getToken, removeToken} = userSlice.actions
export const userSelector = state => state.user.token
export default userSlice.reducer