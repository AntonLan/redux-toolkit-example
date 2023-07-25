import { FC } from 'react'
import style from '@/styles/Table.module.scss'

const TableHead: FC = () => {
	return (
		<thead className={style.table_head}>
		<tr>
			<th scope='col'>
				ID
			</th>
			<th scope='col'>
				Заголовок
			</th>
			<th scope='col'>
				Описание
			</th>
		</tr>
		</thead>
	)
}

export default TableHead