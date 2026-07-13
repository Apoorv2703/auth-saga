import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga";
import auth from './auth/authSlice.js'




let sagaMiddleware = createSagaMiddleware()

let store = configureStore({
    reducer : {auth},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        thunk : false ,
    }).concat(sagaMiddleware)

})

sagaMiddleware.run(rootSaga)


export default store 
