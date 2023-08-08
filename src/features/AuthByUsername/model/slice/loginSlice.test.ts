import { type ILoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: '1234' }
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setUsername('123')))
            .toEqual({ username: '123' })
    })

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '1234' }
        expect(loginReducer(
            state as ILoginSchema,
            loginActions.setPassword('123')))
            .toEqual({ password: '123' })
    })
})
