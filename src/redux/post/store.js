import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from "./rootreducer";

const middleware = [reduxThunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store
