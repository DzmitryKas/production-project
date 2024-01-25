import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { type IArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema'
import { type IArticle } from '@/entities/Article'
import {
    fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticlerecommendations'

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state, action:
                PayloadAction<IArticle[]>
            ) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationSlice
