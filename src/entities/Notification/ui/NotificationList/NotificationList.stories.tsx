import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotificationList } from './NotificationList'
import withMock from 'storybook-addon-mock'
import { WithoutRate } from '@/features/articleRating/ui/ArticleRating/ArticleRating.stories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'entities/notification/NotificationList',
    component: NotificationList,
    decorators: [withMock]
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/notifications',
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомления',
                    description: 'Поставь лайк'
                },
                {
                    id: '2',
                    title: 'Уведомления 2',
                    description: 'Поставь лайк'
                }
            ]
        }
    ]
}
