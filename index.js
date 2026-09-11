import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button from './Button';
import Counter from './Counter';
import TaskList from './TaskList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <h2>*********************************************Day 1*******************************</h2>
    
    <Button />
    <h2>*********************************************Day 2*******************************</h2>
    <Counter />
    <h2>*********************************************Day 3*******************************</h2>
    <TaskList/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
