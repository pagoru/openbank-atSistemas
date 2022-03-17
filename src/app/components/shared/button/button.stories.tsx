import {ComponentMeta} from '@storybook/react';
import {Button} from './button.component';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button>Button</Button>;
export const PrimaryDisabled = () => <Button disabled>Button</Button>;

export const Secondary = () => <Button secondary>Button</Button>;
export const SecondaryDisabled = () => <Button secondary disabled>Button</Button>;