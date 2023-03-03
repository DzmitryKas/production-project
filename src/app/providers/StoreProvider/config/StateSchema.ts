import { type ICounterSchema } from 'entities/Counter'
import { type IUserSchema } from 'entities/User'

export interface StateSchema {
    counter: ICounterSchema
    user: IUserSchema
}
