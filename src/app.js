import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

console.log('testing');
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);



