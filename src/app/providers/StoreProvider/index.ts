import { StoreProvider } from './ui/StoreProvider'
import { createReduxStore, type AppDispatch } from './config/store'
import type { IStateSchema, IReduxStoreWithManager, TStateSchemaKey, IThunkConfig } from './config/stateSchema'

export {
    StoreProvider,
    createReduxStore,
    type IStateSchema,
    type IReduxStoreWithManager,
    type TStateSchemaKey,
    type AppDispatch,
    type IThunkConfig
}
