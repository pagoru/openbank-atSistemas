import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {Title} from "./title.component";

describe('Title', () => {

    it('render title', () => {
        render(<Title />);
        const title = screen.getByTestId("title");

        expect(title).toBeInTheDocument();
    });

    it('render title text', () => {
        render(<Title>Titulo de prueba</Title>);
        const title = screen.getByTestId("title");

        expect(title).toContainHTML('Titulo de prueba')
    });

});