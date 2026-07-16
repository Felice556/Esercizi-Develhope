import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: number; updates: Partial<Todo> }>) => {
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo
      );
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;