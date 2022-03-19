import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Input} from "./input.component";

describe('Input', () => {

    it('render input', () => {
        render(<Input />);
        const input = screen.getByTestId("input");

        expect(input).toBeInTheDocument();
    });

});