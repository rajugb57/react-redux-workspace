import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ServicesReducer from './Services/reducer';
import ProviderReducer from './Providers/reducer';
const rootReducer = combineReducers({
    ServicesReducer: ServicesReducer,
    ProviderReducer: ProviderReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),)
);
export default store;