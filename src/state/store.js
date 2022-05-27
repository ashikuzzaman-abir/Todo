import { configureStore } from "@reduxjs/toolkit";
import Navigation from './reducers/navigation.reducer';
import TodoList from './reducers/todoList.reducer';

export const store = configureStore({
	reducer: {
		navigation: Navigation,
		todoList: TodoList
	},
});
