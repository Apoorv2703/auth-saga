import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user : null ,
    loading : false ,
    error : null 
}

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
        }

    }
    
})

export let {registerRequest , registerSuccess , registerFailure} = authSlice.actions

export default authSlice.reducer