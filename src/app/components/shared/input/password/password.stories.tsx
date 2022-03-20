import {ComponentMeta} from '@storybook/react';
import {InputPassword, InputPasswordProps} from "./password.component";

export default {
    title: 'Shared/Input/Password',
    component: InputPassword,
} as ComponentMeta<typeof InputPassword>;

const Template = (args: InputPasswordProps): any => (
    <InputPassword {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    placeholder: 'Ejemplo de placeholder'
}