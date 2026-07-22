import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axiosInstance";
import {
    loginFailure,
    loginRequest,
    loginSuccess,
    registerFailure,
    registerRequest,
    registerSuccess,
} from "./authSlice";

// Worker function for Registration
function* registerWorker(action) {
    try {
        const response = yield call(axiosInstance.post, "/register", action.payload);
        yield put(registerSuccess(response.data));
    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.response?.data?.error ||
            (error.message === "Network Error"
                ? "Unable to connect to backend server. Please check your network."
                : error.message) ||
            "Registration failed. Please try again.";
        yield put(registerFailure(message));
    }
}

// Worker function for Login
function* loginWorker(action) {
    try {
        const response = yield call(axiosInstance.post, "/login", action.payload);
        yield put(loginSuccess(response.data));
    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.response?.data?.error ||
            (error.message === "Network Error"
                ? "Unable to connect to backend server. Please check your network."
                : error.message) ||
            "Login failed. Please try again.";
        yield put(loginFailure(message));
    }
}

// Watcher function
function* authSaga() {
    yield takeLatest(registerRequest.type, registerWorker);
    yield takeLatest(loginRequest.type, loginWorker);
}

export default authSaga;