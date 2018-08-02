import * as TodoActions from './todo.action';
import {initializeTodoState, TodoListState, TodoState} from './todo.state';
import Todo from '../../models/todo.model';

// Override the Action type with our defined action types
export type Action = TodoActions.All;

// Define default state
const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
];

const defaultState: TodoListState = {
  todos: defaultTodoStates,
  pending: 0,
  loading: false
};

export function TodoReducer(state = defaultState, action: Action) {
  console.log(action, state);
  // Use switch to filter out actions and compute new state
  switch (action.type) {
    case TodoActions.GET_TODOS: {
      return {...state, loaded: false, loading: true}; // loaded here?
    }
    case TodoActions.GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: [
          ...action.payload,
          defaultTodoStates[0]
        ],
        loading: false
      };
    }
    default:
      return state;
  }
}
