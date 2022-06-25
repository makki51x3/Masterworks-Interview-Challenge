import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    repositories: [
        // {
        //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        //   title: 'First Item',
        // },
        // {
        //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        //   title: 'Second Item',
        // },
        // {
        //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
        //   title: 'Third Item',
        // },
      ],
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
