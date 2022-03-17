import {ComponentMeta} from '@storybook/react';
import {Button} from './button.component';

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button>Button</Button>;