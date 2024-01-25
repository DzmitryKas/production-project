import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../config/stateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface IStoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

const StoreProvider: FC<IStoreProviderProps> = ({
    children,
    initialState,
    asyncReducers
}) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export { StoreProvider }
