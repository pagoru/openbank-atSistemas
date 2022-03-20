import {ComponentMeta} from '@storybook/react';
import {InputCounter, InputCounterProps} from "./counter.component";

export default {
    title: 'Shared/Input/Counter',
    component: InputCounter,
} as ComponentMeta<typeof InputCounter>;

const Template = (args: InputCounterProps): any => (
    <InputCounter {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    maxLength: 255
}