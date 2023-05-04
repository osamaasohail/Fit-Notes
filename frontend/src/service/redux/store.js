import { configureStore } from '@reduxjs/toolkit'
import signup from "./reducer/signup"
import signin from "./reducer/signin"
import User from "./reducer/user"

export const store = configureStore({
  reducer: {
    singup:signup,
    signin:signin,
    user:User
  },
})