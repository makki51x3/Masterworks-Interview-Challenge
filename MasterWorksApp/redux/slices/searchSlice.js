import { createSlice } from "@reduxjs/toolkit";
import {arrayRemove} from "../../handlers/arrayRemove"

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
        addToComparison: (state, action) => {
            let notfound = true;
            state.comparisonList.forEach(element => {
                if (element.id==action.payload.id){
                    notfound = false
                }
            });
            if(notfound){
                state.comparisonList.push(action.payload);
            }
        },
        removeFromComparison:(state, action) => {
            let result = arrayRemove(state.comparisonList, action.payload);
            state.comparisonList = result
        },
    }
});

export const { 
    updateSuggestionsVisible,
    updateSuggestions,
    addToComparison,
    removeFromComparison} = searchSlice.actions;

export default searchSlice.reducer;
