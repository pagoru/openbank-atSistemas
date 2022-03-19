import {ComponentMeta} from '@storybook/react';
import {StepsContainer} from "./steps-container.component";

export default {
    title: 'Shared/StepsContainer',
    component: StepsContainer,
} as ComponentMeta<typeof StepsContainer>;

export const Primary = () => (
    <StepsContainer>
        <div>
            Step 1
        </div>
        <div>
            Step 2
        </div>
        <div>
            Step 3
        </div>
    </StepsContainer>
);