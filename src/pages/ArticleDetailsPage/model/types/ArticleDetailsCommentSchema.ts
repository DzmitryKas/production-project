import { type IComment } from '@/entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface IArticleDetailsCommentsSchema extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
