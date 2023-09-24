import { type IStateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: ECountry.Ukraina,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asd',
            currency: ECurrency.EUR
        }
        const state: DeepPartial<IStateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as IStateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileData(state as IStateSchema)).toEqual(undefined)
    })
})
