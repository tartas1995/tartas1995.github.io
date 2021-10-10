import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from './Store';

import Main from "./Components/Main";
ReactDOM.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>,
    document.getElementById("root")
);