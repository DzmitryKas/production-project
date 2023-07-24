import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: IScrollSaveSchema = {
    scroll: {}
}

export const ScrollSaveSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position
        }
    }
})
export const { actions: scrollSaveActions } = ScrollSaveSlice
export const { reducer: scrollSaveReducer } = ScrollSaveSlice
