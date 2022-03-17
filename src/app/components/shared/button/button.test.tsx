import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {Button} from "./button.component";
import styles from './button.module.sass';

describe('Button', () => {

    it('to render', () => {
        render(<Button>test</Button>);
        const button = screen.getByText("test");

        expect(button).toBeInTheDocument();
    });

    it('to have default class', () => {
        render(<Button>test</Button>);
        const button = screen.getByText("test");

        expect(button).toHaveClass(styles.button);
    });

    it('to have disabled class', () => {
        const {container} = render(<Button>test</Button>);
        const button = screen.getByText("test");

        expect(button).not.toHaveClass(styles.disabled);

        render(<Button disabled={true} />, {container});

        expect(button).toHaveClass(styles.disabled);
    });
})