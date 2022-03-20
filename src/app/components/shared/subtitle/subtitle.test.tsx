import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Subtitle} from "./subtitle.component";

describe('Subtitle', () => {

    it('render subtitle', () => {
        render(<Subtitle />);
        const title = screen.getByTestId("subtitle");

        expect(title).toBeInTheDocument();
    });

    it('render subtitle text', () => {
        render(<Subtitle>Subtitulo de prueba</Subtitle>);
        const title = screen.getByTestId("subtitle");

        expect(title).toContainHTML('Subtitulo de prueba')
    });

});