import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ETheme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa maiores praesentium saepe sed sunt. Ex harum maxime nostrum quisquam sed.'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa maiores praesentium saepe sed sunt. Ex harum maxime nostrum quisquam sed.'
}
Dark.decorators = [ThemeDecorator(ETheme.DARK)]
