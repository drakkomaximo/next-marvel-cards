import { CharacterDataWrapper } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.marvelUrl,
  }),
  endpoints: (builder) => ({
    getHeroes: builder.query<CharacterDataWrapper, {limit: number}>({
      query: ({limit}) =>
        `/v1/public/characters?limit=${limit}&ts=1&apikey=${process.env.apiKey}&hash=${process.env.hash}`,
    }),
  }),
});

export const { useGetHeroesQuery } = marvelApi;
