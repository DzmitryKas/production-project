import { type Story } from '@storybook/react'
import { type ETheme } from '@/shared/const/theme'
// eslint-disable-next-line dzmitry-kas-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

)
