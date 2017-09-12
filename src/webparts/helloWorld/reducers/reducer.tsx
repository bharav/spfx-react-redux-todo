import { Reducer, Action } from 'redux';
import { AppState } from '../state/app-state';
import { actionTypes } from '../action-types';
import { ToDoAction } from '../actions/todo-actions';
import {Todo} from '../model/Todo';
import * as _ from "lodash";

const  GetTodoItemRequest = (state: AppState, action : ToDoAction):AppState => {
    let newState = _.cloneDeep(state);
    newState = {Todos:[]};
    return newState
}

const GetTodoItemDone = (state: AppState, action : ToDoAction):AppState => {
    let newState = _.cloneDeep(state);
    newState.Todos.push(action.Todos);
    return newState
}

export const todoReducer: Reducer<AppState> = (state: AppState = { Todos: [] }, action: ToDoAction) => {
    switch (action.type) {
        case actionTypes.GET_TODO_ITEMS_REQUEST:
            return GetTodoItemRequest(state,action);
        case actionTypes.GET_TODO_ITEMS_DONE:
            return GetTodoItemDone(state,action);
        default:
            return state       
    }
}

