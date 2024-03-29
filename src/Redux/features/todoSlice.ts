import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action:PayloadAction<string>) => {
      // Toggle the completion status of the todo
      const task = state.todos.find((item:TTodo) => item.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    
      // Separate the todos into completed and not completed
      const completedTodos = state.todos.filter(todo => todo.isCompleted);
      const notCompletedTodos = state.todos.filter(todo => !todo.isCompleted);
    
      // Combine them back with not completed todos first, followed by completed todos
      state.todos = [...notCompletedTodos, ...completedTodos];
    },
    
     
  },
});

export const { addTodo } = todoSlice.actions;
export const { removeTodo,toggleComplete  } = todoSlice.actions;

export default todoSlice.reducer;
