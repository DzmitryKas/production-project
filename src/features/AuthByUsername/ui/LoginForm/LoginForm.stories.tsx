import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123' }
})]

export const withError = Template.bind({})
withError.args = {}
withError.decorators = [StoreDecorator({
    loginForm: { username: 'admin', password: '123', error: 'Error' }
})]

export const withLoading = Template.bind({})
withLoading.args = {}
withLoading.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]
