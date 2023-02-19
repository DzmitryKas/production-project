import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Button, { EThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: EThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: EThemeButton.OUTLINE
}

Outline.decorators = [ThemeDecorator(ETheme.DARK)]
