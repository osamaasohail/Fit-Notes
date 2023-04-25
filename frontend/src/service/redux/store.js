import { configureStore } from '@reduxjs/toolkit'
import SingUp from "./reducer/SingUp"

export const store = configureStore({
  reducer: {
    singup:SingUp
  },
})