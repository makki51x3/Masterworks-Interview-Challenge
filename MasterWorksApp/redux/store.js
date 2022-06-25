import { configureStore} from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
    reducer:{
        searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }) // disable middleware warnings
});
