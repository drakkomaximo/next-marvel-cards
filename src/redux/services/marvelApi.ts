import { CharacterDataWrapper } from "@/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marvelApi = createApi({
  reducerPath: "marvelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com:443",
  }),
  endpoints: (builder) => ({
    getHeroes: builder.query<CharacterDataWrapper, {limit: number}>({
      query: ({limit}) =>
        `/v1/public/characters?limit=${limit}&ts=1&apikey=fcf9da7007ab397d1dd911f5ec7946ab&hash=8ba405d0ae4da0d5a1b6e087d9d308c0`,
    }),
  }),
});

export const { useGetHeroesQuery } = marvelApi;
