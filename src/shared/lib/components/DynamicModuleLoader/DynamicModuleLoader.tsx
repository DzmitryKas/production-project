import { type FC, type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type IReduxStoreWithManager, type IStateSchema, type TStateSchemaKey } from '@/app/providers/StoreProvider'
import { type Reducer } from '@reduxjs/toolkit'

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>
}

type IReducerListEntry = [TStateSchemaKey, Reducer]

interface IDynamicModuleLoaderProps {
    reducers: TReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props
    const store = useStore() as IReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as TStateSchemaKey]
            if (!mounted) {
                store.reducerManager.add(name as TStateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as TStateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export { DynamicModuleLoader }
