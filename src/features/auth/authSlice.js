import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user || null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        registerRequest: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        },

        registerSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        },

        registerFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },

        loginRequest: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        },

        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        },

        loginFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        },

        logoutRequest: () => {},

        logoutSuccess: (state) => {
            state.user = null;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    }
});

export const {
    registerRequest,
    registerSuccess,
    registerFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess
} = authSlice.actions;

export default authSlice.reducer;