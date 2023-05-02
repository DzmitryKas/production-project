import { type ECurrency } from 'entities/Currency/model/types/currency'
import { type ECountry } from 'entities/Country/model/types/country'

export enum EValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: ECurrency
    country?: ECountry
    city?: string
    username?: string
    avatar?: string
}

export interface IProfileSchema {
    id?: string
    data?: IProfile
    form?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: EValidateProfileError[]
}
