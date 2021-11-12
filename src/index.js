import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer';
import App from './App'

const store = createStore(catsReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
