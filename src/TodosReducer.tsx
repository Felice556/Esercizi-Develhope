type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (title: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { id: Date.now(), title, completed: false }
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: { id }
});

export const editTodo = (id: number, updates: Partial<Todo>): EditTodoAction => ({
  type: EDIT_TODO,
  payload: { id, updates }
});
type TodosState = Todo[];

const initialState: TodosState = [];
type AddTodoAction = { type: typeof ADD_TODO; payload: Todo };
type RemoveTodoAction = { type: typeof REMOVE_TODO; payload: { id: number } };
type EditTodoAction = { type: typeof EDIT_TODO; payload: { id: number; updates: Partial<Todo> } };

type TodoAction = AddTodoAction | RemoveTodoAction | EditTodoAction;

export const TodosReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      
      return [...state, action.payload];

    case REMOVE_TODO:
     
      return state.filter(todo => todo.id !== action.payload.id);
    case EDIT_TODO:
      
      return state.map(todo => todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo);

    default:
      return state;
  }
};