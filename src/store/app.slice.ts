import { createSlice } from '@reduxjs/toolkit'

type initialStateType = {
	selectedSize: string
	selectedQtty: number

}
const initialState: initialStateType = {
	selectedSize: 'M',
	selectedQtty: 1,

}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeQtty: (state, action) => {
			state.selectedQtty = action.payload
		},

	},
})

export const { changeQtty } =
	appSlice.actions
export default appSlice.reducer
