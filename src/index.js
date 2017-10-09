import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import Header from './components/Header.js';
//import ListExample from './components/ListExample.js';

import App from './components/App.js';
import allReducers from './reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);


//cổng mặc định là localhost:3000
//để đổi cổng vào pakage.json thêm PORT=3006 vào phần start thì sẽ đổi cổng thành localhost:3006

ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>, document.getElementById('root'));  

registerServiceWorker();
