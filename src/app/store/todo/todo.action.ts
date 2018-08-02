// Define types of actions (const string).
// There strings are used in reducer and effect.
// One naming convention: const ACTION_TYPE = '[Feature] ACTION_TYPE'

import {Action} from '@ngrx/store';
import Todo from '../../models/todo.model';
import {TodoState} from './todo.state';

export const GET_TODO = '[Todo] GET_TODO';
export const GET_TODO_SUCCESS = '[Todo] GET_TODO_SUCCESS';
export const GET_TODO_ERROR = '[Todo] GET_TODO_ERROR';
export const GET_TODOS = '[Todo] GET_TODOS';
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR';

// Define action classes which implement @ngrx/store Action.
/// Note that type is readonly
/// Use constructor injection for add new member. Must be public
export class GetTodo implements Action {
  readonly type = GET_TODO;

  constructor(public payload: string) {
  } // what is payload string used for?
}

export class GetTodoSuccess implements Action {
  readonly type = GET_TODO_SUCCESS;

  constructor(public payload: Todo) {
  }
}

export class GetTodoError implements Action {
  readonly type = GET_TODO_ERROR;
}

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}

export class GetTodosError implements Action {
  readonly type = GET_TODOS_ERROR;
}

export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;

  constructor(public payload: TodoState[]) {
  }
}

// Export action classes
export type All = GetTodo | GetTodoSuccess | GetTodoError
  | GetTodos | GetTodosSuccess | GetTodosError;
