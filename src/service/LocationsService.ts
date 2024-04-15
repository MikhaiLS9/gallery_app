import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PREFIX } from "../helpers/API";
import { ILocations } from "../global_interface/locations.interface";

export const locationsApi = createApi({
  reducerPath: "locationsPaintings",
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
  endpoints: (builder) => ({
    getLocationsApi: builder.query<ILocations[], string>({
      query: (name) => `locations${name}`,
    }),
  }),
});

export const { useGetLocationsApiQuery } = locationsApi;
