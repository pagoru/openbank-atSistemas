import {ComponentMeta} from '@storybook/react';
import {Title, TitleProps} from "./title.component";

export default {
    title: 'Shared/Title',
    component: Title,
} as ComponentMeta<typeof Title>;

const Template = (args: TitleProps): any => (
    <Title {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    children: 'Titulo de Ejemplo'
}