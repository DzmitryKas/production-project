import {
    createEntityAdapter,
    createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type IComment } from 'entities/Comment'
import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentSchema'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { type IArticle } from 'entities/Article'
import {
    fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state, action:
                PayloadAction<IComment[]>
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
