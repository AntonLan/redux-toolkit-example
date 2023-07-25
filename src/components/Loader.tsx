import { FC } from 'react'
import style from '@/styles/Loader.module.scss'

const Loader: FC = () => {
	return (
		<span className={style.loader}></span>
	)
}

export default Loader