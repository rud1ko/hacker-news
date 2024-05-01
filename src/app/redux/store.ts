import {configureStore} from "@reduxjs/toolkit";
import {NewStoriesApi} from "./api/new-stories-api";

export const store = configureStore({
    reducer: {
        [NewStoriesApi.reducerPath]: NewStoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NewStoriesApi.middleware),
    devTools: process.env.NODE_ENV !== "production"
})