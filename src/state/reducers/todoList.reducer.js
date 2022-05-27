import { createSlice } from "@reduxjs/toolkit/";

const ISlists= {
    mainList: [],
    doneList:[],
    searchOutput: [],
}


export const listSlice = createSlice({
    name: "todoList",
    initialState: ISlists,
    reducers:{
        addList: (state, action) => {
            state.mainList.push(action.payload);
        },
        addDoneList: (state, action) => {
            state.doneList.push(action.payload);
        },
        removeList: (state, action) => {
            state.mainList.splice(action.payload, 1);
        },
        removeDoneList: (state, action) => {
            state.doneList.splice(action.payload, 1);
        }
    }

    });

    export const { addList, addDoneList, removeList, removeDoneList } = listSlice.actions;

    export default listSlice.reducer;