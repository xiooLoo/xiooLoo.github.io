import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './public/scss/index.scss'
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
// import Birthday from './pages/birthday/index';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Birthday />, document.getElementById('root'));
serviceWorker.unregister();
