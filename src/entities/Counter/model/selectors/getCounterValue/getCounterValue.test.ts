import { getCounterValue } from './getCounterValue'
import { type IStateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
    const state: DeepPartial<IStateSchema> = {
        counter: { value: 10 }
    }
    test('', () => {
        expect(getCounterValue(state as IStateSchema)).toEqual(10)
    })
})
