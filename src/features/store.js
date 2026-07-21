import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import auth from '../features/auth/authSlice'
import rootSaga from './saga/rootSaga'



let sagaMiddleWare = createSagaMiddleware()


let store = configureStore({
    reducer : { auth},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({thunk : false}).concat(sagaMiddleWare),


})

sagaMiddleWare.run(rootSaga)

export default store

