import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ETextSize, ETextTheme, Text } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun'
}

export const Error = Template.bind({})
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    theme: ETextTheme.ERROR
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'Title lorem ipsun'
}

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'Title lorem ipsun'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun'
}
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'Title lorem ipsun'
}
onlyTitleDark.decorators = [ThemeDecorator(ETheme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'Title lorem ipsun'
}
onlyTextDark.decorators = [ThemeDecorator(ETheme.DARK)]

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    size: ETextSize.L
}

export const SizeM = Template.bind({})
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    size: ETextSize.M
}
export const SizeS = Template.bind({})
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    size: ETextSize.S
}
