import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {InputCounter} from "./counter.component";

describe('InputCounter', () => {

    it('render counter input', () => {
        render(<InputCounter maxLength={10} />);
        const input = screen.getByTestId("input-counter");

        expect(input).toBeInTheDocument();
    });

    it('render counter input span', () => {
        render(<InputCounter maxLength={10} />);
        const inputSpan = screen.getByTestId("input-counter-span");

        expect(inputSpan).toContainHTML('0/10');
    });

    it('render counter input span to change', () => {
        const {container} = render(<InputCounter maxLength={10} />);
        const inputSpan = screen.getByTestId("input-counter-span");
        expect(inputSpan).toContainHTML('0/10');

        render(<InputCounter maxLength={10} value='abc' />, {container});
        expect(inputSpan).toContainHTML('3/10');
    });

});