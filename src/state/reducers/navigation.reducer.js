import { createSlice } from "@reduxjs/toolkit/";


const ISNavigations = {
    menu: ["Main", "Done"],
    active: "Main",
}
export const navigationSlice = createSlice({
    name: "navigation",
    initialState: ISNavigations,
    reducers: {
        addNavigation: (state, action) => {
            state.menu.push(action.payload);
        },
        setActive: (state, action) => {
            state.active = action.payload;
        },

    }
});

export const { addNavigation, setActive } = navigationSlice.actions;

export default navigationSlice.reducer;
