import { type IStateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { EValidateProfileError } from '../../consts/consts'

describe('getProfileForm.test', () => {
    test('should return validateErrors', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                validateErrors: [EValidateProfileError.NO_DATA, EValidateProfileError.INCORRECT_COUNTRY]
            }
        }
        expect(getProfileValidateErrors(state as IStateSchema)).toEqual([EValidateProfileError.NO_DATA, EValidateProfileError.INCORRECT_COUNTRY])
    })

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined)
    })
})
