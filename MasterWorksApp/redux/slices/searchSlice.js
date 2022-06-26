import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    suggestionList: 
    [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
        id: 'bd7acbea-c1b1-22246c2-aed5-3ad53abb28ba',
        title: 'fourthhhh Item',
        },
        {
        id: '3ac68af2c-c605-48d344-a4f8-fbd91aa97f63',
        title: 'fiffthhh 5555 Item',
        },
        {
        id: '58694a0f-3da1-471f44bd96-145571e29d72',
        title: '666 Item ',
        },
      ],
    filter: "",
    comparisonList:[],
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
    updateAddToComparison: (state, action) => {
        state.comparisonList.push(action.payload);
    },
  },
});

export const { 
    updateSuggestionsVisible,
    updateFilter,
    updateAddToComparison} = searchSlice.actions;

export default searchSlice.reducer;
