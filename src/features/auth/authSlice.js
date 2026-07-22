import { createSlice } from "@reduxjs/toolkit";


const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
};


let authSlice = createSlice({
    name : "auth",
    initialState , 
    reducers : {
        registerRequest : (state)=>{
            state.loading = true ,
            state.error = null
        },
        registerSuccess : (state , action)=>{
            state.loading = false,
            state.user = action.payload 
        },
        registerFailure : (state , action)=>{
            state.loading = false ,
            state.error = action.payload
        },
        loginRequest : (state)=>{
            state.loading = true ,
            state.error = null
        },
        loginSuccess : (state , action)=>{
            state.loading = false ,
            state.user = action.payload
        },
        loginFailure : (state , action)=>{
            state.loading = false ,
            state.error = action.payload
        },
        logOut : (state , action)=>{
            state.user = null
        }

    }
    
})

export let {registerRequest , registerSuccess , registerFailure , loginRequest , loginSuccess , loginFailure , logOut} = authSlice.actions

export default authSlice.reducer