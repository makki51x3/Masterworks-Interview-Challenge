import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    repositories: [],
    filter: "",
};

export const searchSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
        state.filter=action.payload.toLowerCase();
    },
    updateSuggestionsVisible: (state, action) => {
        state.suggestionsVisible=action.payload;
    },
  },
});

export const { 
    updateSuggestionsVisible,
    updateFilter} = searchSlice.actions;

export default searchSlice.reducer;
