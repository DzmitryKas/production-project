import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'
import { EValidateProfileError } from '../../consts/consts'

const data = {
    id: '1',
    username: 'admin',
    age: 22,
    country: ECountry.Ukraina,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asd',
    currency: ECurrency.EUR
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' }
            }
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA])
    })
})
