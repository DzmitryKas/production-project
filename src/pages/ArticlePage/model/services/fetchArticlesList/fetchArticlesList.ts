import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IArticle } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
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
