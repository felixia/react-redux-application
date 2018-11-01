import {applyMiddleware, combineReducers,createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {postReducer} from './reducers/postReducer';


export default createStore(combineReducers({postReducer}),
	{},
	applyMiddleware(logger,thunk)
	);