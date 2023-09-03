import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { EditableProfileHeader } from './EditableProfileHeader'

export default {
    title: 'features/EditableProfileCard/EditableProfileHeader',
    component: EditableProfileHeader
} as ComponentMeta<typeof EditableProfileHeader>

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => <EditableProfileHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
