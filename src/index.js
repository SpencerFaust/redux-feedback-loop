import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';

const feedback = (state={comment: ''}, action) => {
    if (action.type === 'REQUEST') {
        console.log('Redux request received.');
        return state;
    };
    if (action.type === 'FEELING') {
        console.log('Feeling set to:', action.payload);
        return {...state, feeling: action.payload};
    };
    if (action.type === 'UNDERSTANDING') {
        console.log('UNDERSTANDING set to:', action.payload);
        return {...state, understanding: action.payload};
    };
    if (action.type === 'SUPPORTED') {
        console.log('Supported set to:', action.payload);
        return {...state, supported: action.payload};
    };
    if (action.type === 'COMMENT') {
        console.log('Comment set to:', action.payload);
        return {...state, comment: action.payload};
    };
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedback,
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
