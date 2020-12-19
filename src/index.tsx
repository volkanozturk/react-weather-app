import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bulma/css/bulma.min.css';
import {Provider} from 'react-redux';
import './i18n';
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

