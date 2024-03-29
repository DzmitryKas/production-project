import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
    title: 'entities/comment/CommentCard',
    component: CommentCard
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            username: 'Vasya'
        }
    }
}

export const Loading = Template.bind({})
Loading.args = {
    comment: {
        id: '1',
        text: 'hello',
        user: {
            id: '1',
            username: 'Vasya'
        }
    },
    isLoading: true
}
