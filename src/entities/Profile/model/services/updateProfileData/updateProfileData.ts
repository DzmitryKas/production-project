import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from 'app/providers/StoreProvider'
import { type IProfile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<IProfile>('/profile', formData)

            return response.data
        } catch (e) {
            return rejectWithValue('error')
        }
    }
)
