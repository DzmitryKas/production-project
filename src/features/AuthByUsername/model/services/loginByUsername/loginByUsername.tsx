import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type IThunkConfig } from 'app/providers/StoreProvider'

interface ILoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI

        try {
            const response = await extra.api.post<IUser>('/login', { username, password })

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
