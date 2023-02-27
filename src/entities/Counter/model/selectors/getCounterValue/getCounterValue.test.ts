import { getCounterValue } from './getCounterValue'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 }
    }
    test('', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10)
    })
})
