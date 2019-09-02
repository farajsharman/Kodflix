import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Frontend/App';
import * as serviceWorker from './Frontend/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
