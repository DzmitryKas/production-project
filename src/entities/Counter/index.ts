import { counterReducer } from './model/slice/counterSlice'
import { Counter } from './ui/Counter'
import type { ICounterSchema } from './model/types/counterSchema'

export {
    Counter,
    counterReducer,
    type ICounterSchema
}
