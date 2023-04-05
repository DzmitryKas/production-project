import { type IStateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { ECountry } from 'entities/Country'
import { ECurrency } from 'entities/Currency'

describe('getProfileForm.test', () => {
    test('should return form', () => {
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
                form: data
            }
        }
        expect(getProfileForm(state as IStateSchema)).toEqual(data)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined)
    })
})
