import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'

interface IStoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
}

const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export { StoreProvider }
