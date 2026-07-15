import axios from "axios";
import { call, takeLatest } from "redux-saga/effects";




let loginAPI = (formData)=>{
    return axios.post('/api/auth/login',formData)
}
export function* loginWorker(action){
    console.log('worker started');
    
    let response = yield call(loginAPI , action.payload)
    console.log(response);
      

}

export function* watchLogin(){
    yield takeLatest('AUTH/LOGIN_REQUEST', loginWorker)
}


export default function* authSaga(){
    yield watchLogin()
}

