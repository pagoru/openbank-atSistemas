import {ComponentMeta} from '@storybook/react';
import {StepsContainerHeader, StepsContainerHeaderProps} from "./header.component";

export default {
    title: 'Shared/StepsContainer/Header',
    component: StepsContainerHeader,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#333333' },
            ],
        },
    },
} as ComponentMeta<typeof StepsContainerHeader>;

const Template = (args: StepsContainerHeaderProps): any => (
    <StepsContainerHeader {...args}/>
);

export const Primary: any = Template.bind({});
Primary.args = {
    length: 4,
    current: 0
}