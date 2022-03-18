import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Icon} from "./icon.component";
import {IconEnum} from "../../../enums/icon.enum";

describe('Icon', () => {

    it('render right-chevron', () => {
        render(<Icon icon={IconEnum.RIGHT_CHEVRON}/>);
        const button = screen.getByTestId("icon-right-chevron");

        expect(button).toBeInTheDocument();
    });
    
    it('render check', () => {
        render(<Icon icon={IconEnum.CHECK}/>);
        const button = screen.getByTestId("icon-check");
        
        expect(button).toBeInTheDocument();
    });
})