import rootReducer from "./rootReducers";
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

export function configureStore(){
    const store = createStore(rootReducer, composeWithDevTools());

    return store;
}