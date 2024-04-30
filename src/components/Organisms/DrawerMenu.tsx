import React from 'react'
import type { RootState } from '../../store/app.store'
import { useSelector, useDispatch } from 'react-redux'

const DrawerMenu = (props: any) => {
	const { selectorExample } = useSelector((state: RootState) => state.app)
	const dispatch = useDispatch()

	return <></>
}

export default DrawerMenu
