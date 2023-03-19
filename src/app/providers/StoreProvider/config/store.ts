import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'

export function createReduxStore (
    initialState?: IStateSchema,
    asyncReducer?: ReducersMapObject<IStateSchema>
) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
