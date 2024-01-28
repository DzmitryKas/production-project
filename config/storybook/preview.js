import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ETheme } from '../../src/shared/const/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ETheme.LIGHT, color: '#bedfec' },
            { name: 'dark', class: ETheme.DARK, color: '#051a46' },
            { name: 'orange', class: ETheme.ORANGE, color: '#8ee50f' }
        ]
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(ETheme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
