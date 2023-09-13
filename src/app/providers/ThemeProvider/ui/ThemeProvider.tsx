import React, { type FC, type ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT

interface IThemeProviderProps {
    initialTheme?: ETheme
    children: ReactNode
}
const ThemeProvider = ({ initialTheme, children }: IThemeProviderProps) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
