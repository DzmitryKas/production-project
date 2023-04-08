import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IUser, type IUserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const initialState: IUserSchema = {
    _inited: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
