import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PREFIX } from "../helpers/API";
import { IAuthors } from "../global_interface/authors.interface";

export const authorsApi = createApi({
  reducerPath: "author",
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
  endpoints: (builder) => ({
    getAuthorsApi: builder.query<IAuthors[], string>({
      query: (name) => `authors${name}`,
    }),
  }),
});

export const { useGetAuthorsApiQuery } = authorsApi;
