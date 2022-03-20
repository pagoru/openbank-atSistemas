import {ComponentMeta} from '@storybook/react';
import {Loader} from "./loader.component";

export default {
    title: 'Shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

export const Primary = () => (
    <Loader/>
);