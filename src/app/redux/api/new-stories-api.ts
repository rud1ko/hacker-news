import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {LAST_NEWS} from "../../../shared/consts";
import {convertUnixTimeToDateTime} from "../../../shared/functions";
import {NewsItemProps} from "../../types";


export const NewStoriesApi =  createApi({
    reducerPath: "NewStoriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: LAST_NEWS,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllTopStoriesId: builder.query<NewsItemProps[], void>({
            query: () => 'newstories.json',
            transformResponse: async (response: number[]) => {
                const indexes = response.slice(0, 100);
                const promises = indexes.map((id) =>
                    fetch(`${LAST_NEWS}item/${id}.json`).then((res) => res.json())
                );
                const newsItems: NewsItemProps[] = await Promise.all(promises);
                const formattedNewsItems = newsItems.map(newsItem => ({
                    ...newsItem,
                    time: convertUnixTimeToDateTime(newsItem.time)
                }));

                return formattedNewsItems;
            },
        }),
        getAllChilds: builder.query<NewsItemProps[], number>({
            query: (id) => `item/${id}.json?print=pretty`,
            transformResponse: async (response: NewsItemProps) => {
                const kids = response.kids
                const promises = kids.map((el) =>
                    fetch(`${LAST_NEWS}item/${el}.json`).then((res) => res.json())
                )
                const newsItems: NewsItemProps[] = await Promise.all(promises);
                const formattedNewsItems = newsItems.filter(newsItem => !newsItem.deleted);
                return formattedNewsItems;
            },
        }),
        getNewsById: builder.query<NewsItemProps, number>({query: (id) => `item/${id}.json?print=pretty`})
    })
})

export const {useGetAllTopStoriesIdQuery, useGetNewsByIdQuery, useGetAllChildsQuery} = NewStoriesApi