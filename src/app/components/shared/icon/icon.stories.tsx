import {ComponentMeta} from '@storybook/react';
import {Icon} from "./icon.component";
import {IconEnum} from "../../../enums/icon.enum";

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const RightChevron = () => (
    <Icon
        icon={IconEnum.RIGHT_CHEVRON}
        size='24px'
    />
);