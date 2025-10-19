import { createSlice } from "@reduxjs/toolkit";
const NavbarSlice=createSlice({
    name:"Navbar",
    initialState:{isOpen:false},
    reducers:(state)=>{state.isOpen=!state.isOpen}
})
export const{toggleMenu}=NavbarSlice.actions
export default NavbarSlice.reducer;