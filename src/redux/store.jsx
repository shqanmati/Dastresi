import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./NavbarSlice/NavbarSlice"


export const store = configureStore({
    reducer:{
        navbar: navbarReducer,
    },
})