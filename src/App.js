// import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { Provider } from 'mobx-react';
import store from './store/index';
import BasicRouter from './router/index';

const App = () => {
    return (
        <div className="app">
            <Provider {...store}>
                <BasicRouter />
            </Provider>
        </div>
    );
};

export default App;
