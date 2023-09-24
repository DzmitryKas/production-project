import { createContext } from 'react'
import { type ETheme } from '@/app/providers/ThemeProvider/consts/consts'

export interface ThemeContextProps {
    theme?: ETheme
    setTheme?: (theme: ETheme) => void

}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
