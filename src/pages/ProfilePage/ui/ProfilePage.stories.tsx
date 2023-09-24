import ProfilePage from './ProfilePage'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: ECountry.Ukraina,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asd',
            currency: ECurrency.EUR
        }
    }
})]

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(ETheme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: ECountry.Ukraina,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asd',
            currency: ECurrency.EUR
        }
    }
})]
