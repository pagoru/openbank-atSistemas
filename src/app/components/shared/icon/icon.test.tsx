import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Icon} from "./icon.component";
import {IconEnum} from "../../../enums/icon.enum";

describe('Icon', () => {

    it('render right-chevron', () => {
        render(<Icon icon={IconEnum.RIGHT_CHEVRON}/>);
        const icon = screen.getByTestId("icon-right-chevron");

        expect(icon).toBeInTheDocument();
    });
    
    it('render check', () => {
        render(<Icon icon={IconEnum.CHECK}/>);
        const icon = screen.getByTestId("icon-check");
        
        expect(icon).toBeInTheDocument();
    });
})