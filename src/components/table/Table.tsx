import { FC } from 'react'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import style from '@/styles/Table.module.scss'
import { useGetPostLimitPageQuery } from '@/store/api/postApi'
import { useAppSelector } from '@/hooks/redux'


const Table: FC = () => {
	const { currentPage } = useAppSelector(state => state.posts)
	const { data} = useGetPostLimitPageQuery(currentPage)

	return (
		<table className={style.table}>
			<TableHead />
			<tbody>
			{data?.map(r => (
				<TableRow
					key={r.id}
					id={r.id}
					title={r.title}
					body={r.body}
				/>
			))}
			</tbody>
		</table>
	)
}

export default Table