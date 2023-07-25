import { FC } from 'react'
import style from '@/styles/Table.module.scss'

interface TableRowProps {
	id?: number
	title?: string
	body?: string
}

const TableRow: FC<TableRowProps> = ({id, title, body}) => {
	return (
		<tr className={style.table_row}>
			<th scope='row' className={style.table_cell__id}>
				{id}
			</th>
			<th scope='row'>
				{title}
			</th>
			<th scope='row'>
				{body}
			</th>
		</tr>
	)
}

export default TableRow