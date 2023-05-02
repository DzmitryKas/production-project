import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
    title: 'entities/comment/CommentList',
    component: CommentList
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello',
            user: {
                id: '1',
                username: 'Vasya'
            }
        },
        {
            id: '2',
            text: 'comment 2',
            user: {
                id: '2',
                username: 'Petya'
            }
        }
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}
