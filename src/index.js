import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';


const render = () => {
    return ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />, document.getElementById('app'));
};

render();
store.subscribe(render);
