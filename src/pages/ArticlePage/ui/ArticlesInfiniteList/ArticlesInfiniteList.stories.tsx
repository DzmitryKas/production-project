import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesInfiniteList } from './ArticlesInfiniteList'

export default {
    title: 'pages/ArticlesPage/ArticlesInfiniteList',
    component: ArticlesInfiniteList
} as ComponentMeta<typeof ArticlesInfiniteList>

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
