import {configureStore} from '@reduxjs/toolkit'
import loginReducer from "../redux/slices/loginSlice"
import QandAReducer from '../redux/slices/questionAnswerSlice';

const store = configureStore({
   reducer: {
    login: loginReducer,
    questionAnswer: QandAReducer
   }
})

export default store;