import { validateProfileData } from './validateProfileData'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'
import { EValidateProfileError } from '../../consts/consts'

const data = {
    username: 'admin',
    age: 22,
    country: ECountry.Ukraina,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asd',
    currency: ECurrency.EUR
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })

        expect(result).toEqual([EValidateProfileError.INCORRECT_USER_DATA])
    })

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([EValidateProfileError.INCORRECT_AGE])
    })

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([EValidateProfileError.INCORRECT_COUNTRY])
    })

    test('incorrect all', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            EValidateProfileError.INCORRECT_USER_DATA,
            EValidateProfileError.INCORRECT_AGE,
            EValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
