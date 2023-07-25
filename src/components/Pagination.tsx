import React, { FC, useEffect } from 'react'
import style from '@/styles/Pagination.module.scss'
import { useAppSelector } from '@/hooks/redux'
import { useAction } from '@/hooks/actions'
import { useNavigate, useParams } from 'react-router-dom'

interface PaginationProps {
	totalPages: number[]
}

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
	const navigate = useNavigate()
	const params = useParams()
	const { currentPage } = useAppSelector(state => state.posts)
	const { setPage, nextPage, previousPage } = useAction()


	useEffect(() => {
		if (params.page) setPage(Number(params.page))
	},[])

	const setCurrentPage = (page: number) => {
		setPage(page)
		navigate(`/${page}`)
	}

	const setNextPage = (totalPages: number) => {
		nextPage(totalPages)
		if (currentPage === totalPages) return
		navigate(`/${currentPage + 1}`)
	}

	const setPrevPage = () => {
		previousPage()
		if (currentPage <= 1) return
		navigate(`/${currentPage - 1}`)
	}


	return (
		<div className={style.pagination}>
			<button
				onClick={() => setPrevPage()}
			>
				Назад
			</button>
			<div>
				{totalPages?.map(p =>
					<span
						onClick={() => setCurrentPage(p)}
						key={p}
						className={currentPage === p ? `${style.page} ${style.pageCurrent}` : `${style.page}`}
					>{p}
					</span>
				)}
			</div>
			<button
				onClick={() => setNextPage(totalPages?.length)}
			>
				Вперед
			</button>
		</div>
	)
}

export default Pagination