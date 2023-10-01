import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationButton } from './NotificationButton'

export default {
    title: 'features/notificationButton/NotificationButton',
    component: NotificationButton
} as ComponentMeta<typeof NotificationButton>

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />

export const Normal = Template.bind({})
Normal.args = {}
