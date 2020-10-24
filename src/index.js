import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'typeface-roboto'
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../src/styles/main.scss';

// file imports
import configureStore from './store/configureStore';
import { loadBooks } from './actions/bookActions';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore();
store.dispatch(loadBooks());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
