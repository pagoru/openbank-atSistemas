import {ComponentMeta} from '@storybook/react';
import {Subtitle} from "./subtitle.component";

export default {
    title: 'Shared/Subtitle',
    component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

const Template = (args: any): any => (
    <Subtitle {...args}/>
);

export const Primary: any = Template.bind ({});
Primary.args = {
    children: 'Subtitulo de Ejemplo'
}