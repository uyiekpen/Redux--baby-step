import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./MainGlobal"

export  const store  = configureStore({
    reducer: {myReducer}
})