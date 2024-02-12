import { createSlice, nanoid } from "@reduxjs/toolkit";

interface todoSlice {
  id: string;
  title: string;
}

interface todosState {
  items: Array<todoSlice>;
}

const initialState: todosState = {
  items: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push({ id: nanoid(), title: action.payload.title });
    },
    removeTodo(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const todosActions = todosSlice.actions;
export const todosReducers = todosSlice.reducer;
