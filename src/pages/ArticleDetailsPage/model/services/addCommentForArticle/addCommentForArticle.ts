import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IComment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import {
    fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<IComment, string | undefined, IThunkConfig<string>>(
    'addCommentForm/addCommentForArticle',
    async (text, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
