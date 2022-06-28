import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    suggestionList:  [],
    comparisonList:[],
};

const arrayRemove = (arr, value) => { 
    let x = arr.filter(function(ele){ 
        console.log("ele: ",ele)
        return ele.id != value.id; 
    });
    console.log(x);
    return x;
}

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
            // state.comparisonList.pop()
        },
    }
});

export const { 
    updateSuggestionsVisible,
    updateSuggestions,
    addToComparison,
    removeFromComparison} = searchSlice.actions;

export default searchSlice.reducer;
