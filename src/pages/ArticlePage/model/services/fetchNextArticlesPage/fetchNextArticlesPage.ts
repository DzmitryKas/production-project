import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
void,
void,
IThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (props, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI
        const hasMore = getArticlesPageHasMore(getState())
        const isLoading = getArticlesPageIsLoading(getState())
        const page = getArticlesPageNum(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1))
            dispatch(fetchArticlesList({}))
        }
    }
)
