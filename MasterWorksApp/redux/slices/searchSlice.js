import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suggestionsVisible: false,
    suggestionList: 
    [
        // {
        //   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        //   name: 'First Item',
        // },
        // {
        //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        //   name: 'Second Item',
        // },
        // {
        //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
        //   name: 'Third Item',
        // },
        // {
        // id: 'bd7acbea-c1b1-22246c2-aed5-3ad53abb28ba',
        // name: 'fourthhhh Item',
        // },
        // {
        // id: '3ac68af2c-c605-48d344-a4f8-fbd91aa97f63',
        // name: 'fiffthhh 5555 Item',
        // },
        // {
        // id: '58694a0f-3da1-471f44bd96-145571e29d72',
        // name: '666 Item',
        // },
      ],
    // filter: "",
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
