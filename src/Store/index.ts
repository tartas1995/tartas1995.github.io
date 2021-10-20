import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from "./reducer";

const store: Store<State, Action> & {
    dispatch: DispatchType
} = createStore(reducer,{
    opened: null,
    list: []
}, composeWithDevTools(
    applyMiddleware(thunk))
)

export default store;