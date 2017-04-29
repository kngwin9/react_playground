//  Import React
import React from 'react';
import ReactDOM from 'react-dom';


//  Importing Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './components/app';

//  Importing Reducers
import reducers from './reducers/index';

//  Redux part 1.
//  ApplyMiddleware = action goes through middleware so that you can manipulate the action. Any methods you pass in to ApplyMiddleware and applies it.
//  createStore = what holds all the states.
//  2) Need to pass in to Reducers from the Middleware.
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
        <Provider store={ createStoreWithMiddleware(reducers) }>
            <App />
        </Provider>,
    document.getElementById('root')
);
