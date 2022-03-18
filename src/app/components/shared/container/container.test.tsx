import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {Container} from "./container.component";
import styles from './container.module.sass';

describe('Container', () => {

    it('to render', () => {
        render(<Container>test</Container>);
        const container = screen.getByTestId("container");

        expect(container).toBeInTheDocument();
    });

    it('to have default class', () => {
        render(<Container>test</Container>);
        const container = screen.getByTestId("container");

        expect(container).toHaveClass(styles.container);
    });

})