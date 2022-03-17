import {ComponentMeta} from '@storybook/react';
import {Container} from "./container.component";

export default {
    title: 'Container',
    component: Container,
} as ComponentMeta<typeof Container>;

export const Primary = () => <Container>content</Container>;