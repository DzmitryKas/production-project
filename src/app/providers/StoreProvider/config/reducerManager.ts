import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IReducerManager, type IStateSchema, type TStateSchemaKey } from './stateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<IStateSchema>): IReducerManager {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)

    let keysToRemove: TStateSchemaKey[] = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: IStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },
        add: (key: TStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: TStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}
