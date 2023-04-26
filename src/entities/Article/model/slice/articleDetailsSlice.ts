import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type IArticle } from '../types/article'

const initialState: IArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (
                state, action:
                PayloadAction<IArticle>
            ) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
