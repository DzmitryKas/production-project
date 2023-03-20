import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { username: 'admin', id: '1' }

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'admin', password: '1' })
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(userValue)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'admin', password: '1' })
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

        // expect(thunk.api.post).toHaveBeenCalled()
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
