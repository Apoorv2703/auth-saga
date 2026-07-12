import { takeLatest } from "redux-saga/effects";

export function* loginWorker(action){
    console.log('login worker running');
    console.log(action.payload);   

}

export function* watchLogin(){
    yield takeLatest('AUTH/LOGIN_REQUEST', loginWorker)
}


export default function* authSaga(){
    yield watchLogin()
}