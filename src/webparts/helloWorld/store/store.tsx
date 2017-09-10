import * as React from 'react';
import { createStore, Store, Action, Reducer, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { AppState } from '../state/app-state';
import { todoReducer } from '../reducers/reducer';

export const appStore: Store<AppState> =
    createStore<AppState>(todoReducer, applyMiddleware(thunk));