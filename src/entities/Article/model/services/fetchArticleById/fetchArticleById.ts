import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '@/app/providers/StoreProvider'
import { type IArticle } from '../../types/article'

export const fetchArticleById = createAsyncThunk<IArticle, string | undefined, IThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            if (!articleId) {
                throw new Error('')
            }

            const response = await extra.api.get<IArticle>('/articles/' + articleId, {
                params: {
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
