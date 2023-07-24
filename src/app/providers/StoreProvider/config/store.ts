import { type CombinedState, configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStateSchema, type IThunkExtraArg } from './stateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { $api } from 'shared/api/api'
import { scrollSaveReducer } from 'features/ScrollSave'

export function createReduxStore (
    initialState?: IStateSchema,
    asyncReducer?: ReducersMapObject<IStateSchema>
) {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: IThunkExtraArg = {
        api: $api
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
