import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'
import avatar from '@/shared/assets/test/img.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: ECountry.Ukraina,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asd',
        currency: ECurrency.EUR,
        avatar
    }
}

export const withError = Template.bind({})
withError.args = {
    error: 'true'
}

export const withLoading = Template.bind({})
withLoading.args = {
    isLoading: true
}
