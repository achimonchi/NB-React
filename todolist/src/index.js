import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { login } from './helper/users';
import { act } from 'react-dom/test-utils';

const initialState = {
  users : [],
}

const rootReducer=async(state = initialState, action)=>{
  
  switch(action.type){
    case "LOGIN" :
      const isLogin = await login(action.data);
      if(isLogin.status === 200){
        localStorage.setItem("login", true);
        localStorage.setItem("user", JSON.stringify(isLogin.data));
        window.location.replace('/');
      } else {
        alert('Gagal Login !');
      }
  }
  return state;
}

const store = createStore(rootReducer);

console.log(store.getState());

const RootElement = () =>{
  return <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
}

ReactDOM.render(<RootElement/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
