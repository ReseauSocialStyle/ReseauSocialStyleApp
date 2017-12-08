import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LookPage from "./Containers/LookPage"
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<LookPage />, document.getElementById('root'));
registerServiceWorker();
