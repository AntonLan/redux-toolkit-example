import { FC } from 'react'
import { usePostQuery } from '@/store/api/postApi'
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import Table from '@/components/table/Table'
import Pagination from '@/components/Pagination'
import { getPageCount } from '@/utils/pages'


const MainPage: FC = () => {
	const { data, isError, isLoading} = usePostQuery()
	const pagesCount = getPageCount(data?.length, 10)



	return (
		<>
			{isLoading && <Loader />}
			{isError && <Error/>}
			<Table/>
			<Pagination totalPages={pagesCount}/>
		</>
	)
}

export default MainPage