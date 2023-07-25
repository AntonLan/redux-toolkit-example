import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '@/store/api/postApi'
import { postsReducer } from '@/store/posts/posts.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
		posts: postsReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>