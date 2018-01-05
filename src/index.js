import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();