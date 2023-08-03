import { combineReducers } from '@reduxjs/toolkit'
import { type IArticleDetailsPageSchema } from '../types'
import { articleDetailsPageRecommendationsReducer } from '../slices/articleDetailsPageRecommendationSlice'
import { articleDetailsCommentsReducer } from '../slices/articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer

})
