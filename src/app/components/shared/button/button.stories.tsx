import {ComponentMeta} from '@storybook/react';
import {Button, ButtonProps} from './button.component';

export default {
    title: 'Shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args: ButtonProps): any => (
    <Button {...args}/>
);

export const Primary: any = Template.bind({});
Primary.args = {
    children: 'Button'
}

export const PrimaryDisabled: any = Template.bind({});
PrimaryDisabled.args = {
    disabled: true,
    children: 'Button'
}

export const Secondary: any = Template.bind({});
Secondary.args = {
    secondary: true,
    children: 'Button'
}

export const SecondaryDisabled: any = Template.bind({});
SecondaryDisabled.args = {
    secondary: true,
    disabled: true,
    children: 'Button'
}