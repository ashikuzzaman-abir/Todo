import { createSlice } from "@reduxjs/toolkit/";

const ISlists = {
	mainList: [],
	doneList: [],
	searchOutput: [],
	currentSearch: "",
};

export const listSlice = createSlice({
	name: "todoList",
	initialState: ISlists,
	reducers: {
		addList: (state, action) => {
			state.mainList.push(action.payload);
		},
		addDoneList: (state, action) => {
			state.doneList.push(action.payload);
		},
		removeList: (state, action) => {
			state.mainList = state.mainList.filter((item) => {
				return item !== action.payload;
			});
		},
		removeDoneList: (state, action) => {
			state.doneList = state.doneList.filter((item) => {
				return item !== action.payload;
			});
		},
		setCurrentSearch: (state, action) => {
			state.currentSearch = action.payload;
		},
		resetCurrentSearch: (state) => {
			state.currentSearch = "";
		},
		setSearchOutput: (state, action) => {
			state.searchOutput = action.payload;
		},
		removeSearchList: (state, action) => {
			state.searchOutput = state.searchOutput.filter((item) => {
				return item !== action.payload;
			});
		},
	},
});

export const {
	addList,
	addDoneList,
	removeList,
	removeDoneList,
	setCurrentSearch,
	resetCurrentSearch,
	setSearchOutput,
    removeSearchList,
} = listSlice.actions;

export default listSlice.reducer;
