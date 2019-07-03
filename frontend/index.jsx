import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Music for everyone.</h1>, root);

    // for testing
    window.getState = store.getState(); 
    window.dispatch = store.dispatch;   
});