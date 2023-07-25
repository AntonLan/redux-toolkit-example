import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from '@/model/PostType'


export const postApi = createApi({
	reducerPath: 'post/api',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_URL_API
	}),
	endpoints: build => ({
		post: build.query<PostType[], void>({
			query: () => ({
				url: '/posts',
			})
		}),
		getPostLimitPage: build.query<PostType[], number | null>({
			query: (page) => ({
				url: `/posts?_page=${page}&_limit=10`,
			})
		})
	})
})

export const { usePostQuery, useGetPostLimitPageQuery } = postApi