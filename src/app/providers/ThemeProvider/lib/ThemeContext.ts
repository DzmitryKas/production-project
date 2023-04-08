import { createContext } from 'react'

export enum ETheme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme'
}

export interface ThemeContextProps {
    theme?: ETheme
    setTheme?: (theme: ETheme) => void

}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
