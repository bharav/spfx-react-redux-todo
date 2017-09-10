import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { Todo } from '../model/Todo';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import pnp from 'sp-pnp-js';

declare var fetch;

export interface ToDoAction extends Action {
    Todos: Todo[]
}

const createGetToItemRequestAction: () => ToDoAction = () => ({
    type: actionTypes.GET_TODO_ITEMS_REQUEST,
    Todos: []
})


const createGetToDoneAction: (todos: Todo[]) => ToDoAction = (todos) => ({
    type: actionTypes.GET_TODO_ITEMS_DONE,
    Todos: todos
})

export const getTodos = () => {
    return (dispatch) => {
        dispatch(createGetToItemRequestAction());
        return pnp.sp.web.lists.get()
            .then(r => r.json())
            .then((todoItems: Todo[]) => {
                dispatch(createGetToDoneAction(todoItems.map((todo: Todo) => {
                    const t = new Todo();
                    t.Title = todo.Title;
                    t.Description = todo.Description;
                    return t;
                })));
            });
    };
}