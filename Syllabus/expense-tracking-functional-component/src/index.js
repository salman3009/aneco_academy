import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import axios from 'axios';
axios.interceptors.response.use(function (response) {
    console.log("response",response);
    return response
   }, function(error) {
     console.log(error.response);
    if (error.response.status === 401) {
            alert("errors")
    }
    return Promise.reject(error.response.data)
})

const store = createStore(rootReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
