import * as React from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, IMapDispatchToProps,} from 'react-redux';
import {AppState} from '../state/app-state';
import {HelloWorld} from '../components/HelloWorld';
import {getTodos} from '../actions/todo-actions';

const mapStateToProps = (state: AppState) => ({
	Todos: state.Todos
}); 

const mapDispatchToProps = (dispatch: Dispatch<AppState>) =>
	bindActionCreators({ getTodos }, dispatch);

export const ToDoContainer: typeof HelloWorld =
	connect(mapStateToProps, mapDispatchToProps)(HelloWorld);	