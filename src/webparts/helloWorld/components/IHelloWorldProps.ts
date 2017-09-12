export interface IHelloWorldProps {
  description: string;
}

import { Todo } from '../model/Todo';


export interface IToDoProps {
  Todos: Todo[];
  getTodos: () => Promise<Todo[]>;
}