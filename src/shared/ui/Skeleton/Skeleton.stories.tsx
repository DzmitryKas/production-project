import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Skeleton',
    component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
    width: '100%',
    height: 200
}

export const Circle = Template.bind({})
Circle.args = {
    border: '50%',
    width: 100,
    height: 100
}

export const NormalDark = Template.bind({})
NormalDark.args = {
    width: '100%',
    height: 200
}
NormalDark.decorators = [ThemeDecorator(ETheme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
    border: '50%',
    width: 100,
    height: 100
}
CircleDark.decorators = [ThemeDecorator(ETheme.DARK)]