import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'; 
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(promise, thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider> 
    , document.getElementById('root'));
serviceWorker();
