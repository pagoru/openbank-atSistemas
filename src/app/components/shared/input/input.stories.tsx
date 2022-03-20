import {ComponentMeta} from '@storybook/react';
import {Input, InputProps} from "./input.component";
import {IconEnum} from "../../../enums/icon.enum";

export default {
    title: 'Shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template = (args: InputProps): any => (
    <Input {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    placeholder: 'Ejemplo de placeholder'
}

export const PrimaryIcon: any = Template.bind ({});
PrimaryIcon.args = {
    placeholder: 'Repite tu contraseña',
    icon: IconEnum.EYE_SHOW
}