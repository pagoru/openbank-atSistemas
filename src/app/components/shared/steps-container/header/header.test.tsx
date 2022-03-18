import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {StepsContainerHeader} from "./header.component";

describe('StepsContainerHeader', () => {

    it('render right-chevron', () => {
        render(<StepsContainerHeader length={3} current={0}/>);
        const button = screen.getByTestId("steps-container-header");

        expect(button).toBeInTheDocument();
    });
})