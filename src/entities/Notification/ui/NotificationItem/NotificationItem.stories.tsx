import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationItem } from './NotificationItem'

export default {
    title: 'entities/notification/NotificationItem',
    component: NotificationItem
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {}
