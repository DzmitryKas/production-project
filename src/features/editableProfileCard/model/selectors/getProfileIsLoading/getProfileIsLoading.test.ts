import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileForm.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined)
    })
})
