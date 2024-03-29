import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPosts} from './redux/state';
import {StateType} from './redux/stateType';

export const rerenderEntireTree =(state:StateType)=>{
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);
}

