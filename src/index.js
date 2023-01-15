import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './component/Counter';
import { Provider } from 'react-redux';
import store from './appbook/store';
// import store from './store';
// import store from './todosstore';
// import store from './app/tolkitstore';
// import bookStore from './app/bookStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
    <App />
   
    {/* <Counter></Counter> */}
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
