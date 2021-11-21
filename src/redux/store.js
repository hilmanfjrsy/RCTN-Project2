import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice/dataSlice'
import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    cart: dataReducer,
    user: userReducer
  }
})

export default store