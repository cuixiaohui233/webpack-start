import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducer/index';

const store = createStore(
    Reducers,
    applyMiddleware(thunk)
);