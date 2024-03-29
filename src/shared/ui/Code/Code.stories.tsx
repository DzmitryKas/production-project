import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Code } from './Code'

export default {
    title: 'shared/Code',
    component: Code
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})
Normal.args = {
    text: 'import React from \'react\'\n' +
        'import { type ComponentMeta, type ComponentStory } from \'@storybook/react\'\n' +
        'import { Code } from \'./Code\'\n' +
        '\n' +
        'export default {\n' +
        '    title: \'shared/Code\',\n' +
        '    component: Code\n' +
        '} as ComponentMeta<typeof Code>\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />'
}
