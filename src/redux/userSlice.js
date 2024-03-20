import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{}
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            
            console.log(action)
            state.name=action.payload.user.name
            state.email=action.payload.user.email
            state.password=action.payload.user.password
            state.cpassword=action.payload.user.cpassword
            state.role=action.payload.user.role
            state.imgpath=action.payload.user.imgpath
            state.id=action.payload.user._id
            
            
        },
        logout: (state, action) => {
           
            state.name = "";
            state.email = "";
            state.cpassword="";
            state.role="";
            state. password="";

        },
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer