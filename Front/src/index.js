import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const epicMiddleware = createEpicMiddleware(epics);

const middleware = applyMiddleware(epicMiddleware, thunk);

const store = createStore(
    reducer,
    compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
