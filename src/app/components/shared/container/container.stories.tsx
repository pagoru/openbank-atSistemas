import {ComponentMeta} from '@storybook/react';
import {Container} from "./container.component";

export default {
    title: 'Shared/Container',
    component: Container,
} as ComponentMeta<typeof Container>;

const Template = (args: any): any => (
    <Container {...args}/>
);

export const Primary: any = Template.bind({});
Primary.args = {
    children: (
        <label>test</label>
    )
}