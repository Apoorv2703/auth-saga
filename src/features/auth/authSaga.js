import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../api/axiosInstance";
import { registerFailure, registerRequest, registerSuccess } from "./authSlice";

function* registerWorker(action){
    try {
        let response = yield call(axiosInstance.post , "/register",action.payload)
        yield put(registerSuccess(response.data))
        
    } catch (error) {
        let message = error.response?.data?.message || "register failure"
        yield put(registerFailure(message))
        
    }

}

function* authSaga(){
    yield takeLatest(registerRequest.type , registerWorker)
}

export default  authSaga