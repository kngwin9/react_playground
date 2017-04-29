import { combineReducers } from 'redux';

import appReducer from './app_reducer';

//  Create variable to hold the result of combineReducers
const rootReducer = combineReducers({
    app: appReducer
});

export default rootReducer;