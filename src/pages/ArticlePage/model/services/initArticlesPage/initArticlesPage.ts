import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type TSortOrder } from '@/shared/types/sort'
import { type EArticleSortField, type EArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
IThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const inited = getArticlesPageInited(getState())

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as TSortOrder
            const sortFromUrl = searchParams.get('sort') as EArticleSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as EArticleType

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl))
            }
            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl))
            }
            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl))
            }
            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl))
            }

            dispatch(articlesPageActions.initState())
            dispatch(fetchArticlesList({}))
        }
    }
)
