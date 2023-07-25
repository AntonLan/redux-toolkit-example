import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { postActions } from '@/store/posts/posts.slice'

const actions = {
	...postActions
}

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}