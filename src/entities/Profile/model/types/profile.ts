import { type ECurrency } from 'entities/Currency/model/types/currency'
import { type ECountry } from 'entities/Country/model/types/country'

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
