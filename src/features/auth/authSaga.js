import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axiosInstance";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "./authSlice";


//worker function
function* registerWorker(action){
    try {
        let response = yield call(axiosInstance.post , "/register",action.payload)
        yield put(registerSuccess(response.data))
        
    } catch (error) {
        let message = error.response?.data?.message || "register failure"
        yield put(registerFailure(message))
        
    }

}

function* loginWorker(action){
    try {
        let response = yield call(axiosInstance.post ,'/login' , action.payload)
        yield put(loginSuccess(response.data))
    } catch (error) {
        let message = error.response?.data?.message || "login failure"
        yield put(loginFailure(message))
    }
}


//watcher function
function* authSaga(){
    yield takeLatest(registerRequest.type , registerWorker)
    yield takeLatest(loginRequest.type , loginWorker)
}

export default  authSaga