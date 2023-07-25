import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostState {
	currentPage: number
}

const initialState: PostState = {
	currentPage: 1
}

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		nextPage(state, action: PayloadAction<number>) {
			if (state.currentPage >= action.payload) return
			state.currentPage += 1
		},
		previousPage(state) {
			if (state.currentPage <= 1) return
			state.currentPage -= 1
		},
	}
})

export const postActions = postSlice.actions
export const postsReducer = postSlice.reducer