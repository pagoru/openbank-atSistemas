import {ComponentMeta} from '@storybook/react';
import {InputCheckbox} from "./checkbox.component";

export default {
    title: 'Shared/Input/Checkbox',
    component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

const Template = (args: any): any => (
    <InputCheckbox {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    children: 'Ejemplo de checkbox'
}