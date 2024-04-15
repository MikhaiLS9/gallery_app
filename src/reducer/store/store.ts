
import { configureStore } from "@reduxjs/toolkit";
import paintingSlice from "../paintingSlice";
import { paintingsApi } from "../../service/PaintingsService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authorsApi } from "../../service/AuthorsService";
import { locationsApi } from "../../service/LocationsService";

export const store = configureStore({
  reducer: {
    paintings: paintingSlice,
    [paintingsApi.reducerPath]: paintingsApi.reducer,
    [authorsApi.reducerPath]: authorsApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      paintingsApi.middleware,
      authorsApi.middleware,
      locationsApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
