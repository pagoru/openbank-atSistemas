import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Input} from "./input.component";
import {IconEnum} from "../../../enums/icon.enum";

describe('Input', () => {

    it('render input', () => {
        render(<Input />);
        const input = screen.getByTestId("input");

        expect(input).toBeInTheDocument();
    });
    
    it('render value input', () => {
        render(<Input value='test value' />);
        const inputDom = screen.getByTestId("input-dom");
        
        expect(inputDom).toHaveValue('test value');
    });
    
    it('render input icon', () => {
        render(<Input icon={IconEnum.RIGHT_CHEVRON} />);
        const inputIcon = screen.getByTestId("icon-right-chevron");
    
        expect(inputIcon).toBeInTheDocument();
    });

});