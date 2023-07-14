/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore } from '@reduxjs/toolkit';

import { articlesApi } from '../../features/articles/api/articles-api';
import { articlesReducer } from '../../features/articles/store/articles-slice';

export const store = configureStore({
  // @ts-ignore
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    articles: articlesReducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;