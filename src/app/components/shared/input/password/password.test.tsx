import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {InputPassword} from "./password.component";

describe('InputPassword', () => {

    it('render password input', () => {
        render(<InputPassword />);
        const input = screen.getByTestId("input");

        expect(input).toBeInTheDocument();
    });

});