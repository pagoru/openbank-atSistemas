import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {InputCheckbox} from "./checkbox.component";

describe('InputCheckbox', () => {

    it('render checkbox input', () => {
        render(<InputCheckbox />);
        const input = screen.getByTestId("input-checkbox");

        expect(input).toBeInTheDocument();
    });
    
    it('render checkbox input label', () => {
        render(<InputCheckbox>Example label</InputCheckbox>);
        const input = screen.getByText("Example label");
        
        expect(input).toBeInTheDocument();
    });
    
    it('on click change value', () => {
        render(<InputCheckbox/>);
        const input = screen.getByTestId("input-checkbox");
        const inputDom = screen.getByTestId("input-checkbox-dom");
    
        expect(inputDom).not.toBeChecked()
        
        input.click();
        
        expect(inputDom).toBeChecked()
    });

});