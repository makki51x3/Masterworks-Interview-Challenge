import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    suggestionList:  [],
    comparisonList:[],
};

export const searchSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
        updateSuggestions: (state, action) => {   // needs refactoring 
            state.suggestionList = action.payload.sort();
        },
        updateSuggestionsVisible: (state, action) => {
            state.suggestionsVisible=action.payload;
        },
        updateAddToComparison: (state, action) => {
            let notfound = true;
            state.comparisonList.forEach(element => {
                if (element.id==action.payload.id){
                    notfound = false
                }
            });
            if(notfound){state.comparisonList.push(action.payload);}
        },
    }
});

export const { 
    updateSuggestionsVisible,
    updateSuggestions,
    updateAddToComparison} = searchSlice.actions;

export default searchSlice.reducer;
