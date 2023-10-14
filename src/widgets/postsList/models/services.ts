import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

import {IPost} from "../types";

import {API_URL} from "../../../shared/config";

import {IPostQuery} from "./types";



export const postService = createApi({
  reducerPath: "postService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<{ posts: IPost[]; meta: number }, IPostQuery>({
      query: ({limit = 10, start = 0}) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start:start,
        },
      }),
      transformResponse: (response, meta) => {
        return {
          posts: response as IPost[],
          meta: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
    }),
    fetchPostById: build.query<IPost, number>({
      query:(id:number=1)=>({
        url:`/posts/${id}`,
      }),
    }),
  }),
});

export const {useFetchAllPostsQuery, useFetchPostByIdQuery} = postService;
