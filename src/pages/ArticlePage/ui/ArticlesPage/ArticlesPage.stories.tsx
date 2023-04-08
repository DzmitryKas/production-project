import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticlePage from './ArticlesPage'

export default {
    title: 'shared/ArticlesPage',
    component: ArticlePage
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
