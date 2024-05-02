import {configureStore} from "@reduxjs/toolkit";
import {NewStoriesApi} from "./api/new-stories-api";
import {kidsDeletedSlice} from "./kidsDeleted.slice";

export const store = configureStore({
    reducer: {
        isDeletedReducer: kidsDeletedSlice.reducer,
        [NewStoriesApi.reducerPath]: NewStoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NewStoriesApi.middleware),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>