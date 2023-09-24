import { type EntityState } from '@reduxjs/toolkit'
import { type EArticleSortField, type EArticleView, type IArticle, type EArticleType } from '@/entities/Article'
import { type TSortOrder } from '@/shared/types'

export interface IArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filters
    _inited: boolean
    view: EArticleView
    order: TSortOrder
    sort: EArticleSortField
    search: string
    type: EArticleType

}
