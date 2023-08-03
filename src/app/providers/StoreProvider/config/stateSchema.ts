import { type ICounterSchema } from 'entities/Counter'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type To } from '@remix-run/router'
import { type NavigateOptions } from 'react-router/dist/lib/context'
import { type IArticleDetailsSchema } from 'entities/Article'
import {
    type IArticleDetailsCommentsSchema,
    type IArticleDetailsPageSchema,
    type IArticleDetailsRecommendationSchema
} from 'pages/ArticleDetailsPage'
import { type IAddCommentFormSchema } from 'features/addCommentForm'
import { type IArticlesPageSchema } from 'pages/ArticlePage'
import { type IScrollSaveSchema } from 'features/ScrollSave'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
    scrollSave: IScrollSaveSchema

    // Асинхронные редюсеры
    loginForm?: ILoginSchema
    profile?: IProfileSchema
    articleDetails?: IArticleDetailsSchema
    addCommentForm?: IAddCommentFormSchema
    articlesPage?: IArticlesPageSchema
    articleDetailsPage?: IArticleDetailsPageSchema

}

export type TStateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
    state: IStateSchema
}
