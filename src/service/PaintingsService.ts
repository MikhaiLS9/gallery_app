
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPaintings } from "../global_interface/paintings.interface";
import { PREFIX } from "../helpers/API";

export const paintingsApi = createApi({
  reducerPath: "paintingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),

  endpoints: (builder) => ({
    getPaintingsApi: builder.query<IPaintings[], string>({
      query: (query: string = "") => ({
        url: `paintings${query}`,
      }),
    }),
  }),
});


export const { useGetPaintingsApiQuery } = paintingsApi;
