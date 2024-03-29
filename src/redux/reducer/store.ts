import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import holderReducer from './holder';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(holderReducer, composedEnhancer);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
