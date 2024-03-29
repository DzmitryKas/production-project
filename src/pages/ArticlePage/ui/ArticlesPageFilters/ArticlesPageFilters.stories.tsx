import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
