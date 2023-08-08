import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type ICounterSchema } from '../../types/counterSchema'

export const getCounterValue = createSelector(
    getCounter,
    (counter: ICounterSchema) => counter.value
)
