import {ComponentMeta} from '@storybook/react';
import {Icon, IconProps} from "./icon.component";
import {IconEnum} from "../../../enums/icon.enum";

export default {
    title: 'Shared/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template = (args: IconProps): any => (
    <Icon {...args}/>
);

export const RightChevron: any = Template.bind ({});
RightChevron.args = {
    icon: IconEnum.RIGHT_CHEVRON,
    size: '24px'
}

export const Check: any = Template.bind ({});
Check.args = {
    icon: IconEnum.CHECK,
    size: '24px'
}