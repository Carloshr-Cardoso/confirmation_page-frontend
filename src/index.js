import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/main.scss';
import 'antd/dist/antd.css';

import './assets/css/main.css';
import './assets/css/core.css';
import './assets/css/responsive/responsive.css';

import {Provider} from 'react-redux';
import store from './store'

import App from './App';

ReactDOM.render(<Provider store={store}> <App/> </Provider>, document.getElementById('root'));