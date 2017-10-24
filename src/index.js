import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import YHome from './y-home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<YHome/>, document.getElementById('root'));
registerServiceWorker();
gi