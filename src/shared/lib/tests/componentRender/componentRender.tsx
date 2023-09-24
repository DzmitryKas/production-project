import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { I18nextProvider } from 'react-i18next'
import { type IStateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'

export interface renderWithOptions {
    route?: string
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export function componentRender (component: ReactNode, options: renderWithOptions = {}) {
    const { route = '/', initialState, asyncReducers } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
