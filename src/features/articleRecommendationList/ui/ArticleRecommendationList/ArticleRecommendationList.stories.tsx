import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { ArticleRecommendationList } from './ArticleRecommendationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { type IArticle } from '@/entities/Article'

export default {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [withMock]
} as ComponentMeta<typeof ArticleRecommendationList>

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />

const article: IArticle = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asf'
}

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/articles?limit=3',
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' }
            ]
        }
    ]
}
