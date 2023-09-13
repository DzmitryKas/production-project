import { type ECountry } from 'entities/Country'
import { type ECurrency } from 'entities/Currency/model/consts/consts'

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
