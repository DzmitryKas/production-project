import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { AppLink, EAppLinkTheme } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/shared/const/theme'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'text',
    theme: EAppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'text',
    theme: EAppLinkTheme.SECONDARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'text',
    theme: EAppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'text',
    theme: EAppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(ETheme.DARK)]
