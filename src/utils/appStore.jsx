import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gpTReducer from "./gptSlice"
 const appStore=configureStore(
    {
        reducer:{
          user:userReducer,
          movies:moviesReducer,
          gpt:gpTReducer,
        }
    }
 )
 export default appStore