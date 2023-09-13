import { type IProfile } from 'entities/Profile'
import { type EValidateProfileError } from '../consts/consts'

export interface IProfileSchema {
    id?: string
    data?: IProfile
    form?: IProfile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: EValidateProfileError[]
}
