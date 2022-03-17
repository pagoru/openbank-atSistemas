import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import {Button} from "./button.component";
import styles from './button.module.sass';

describe('Button', () => {

    it('to render', () => {
        render(<Button>test</Button>);
        const button = screen.getByTestId("button");

        expect(button).toBeInTheDocument();
    });

    it('to have default class', () => {
        render(<Button>test</Button>);
        const button = screen.getByTestId("button");

        expect(button).toHaveClass(styles.button);
    });

    it('to have disabled class', () => {
        const {container} = render(<Button>test</Button>);
        const button = screen.getByTestId("button");

        expect(button).not.toHaveClass(styles.disabled);

        render(<Button disabled />, {container});

        expect(button).toHaveClass(styles.disabled);
    });
    
    it('to have secondary class', () => {
        const {container} = render(<Button>test</Button>);
        const button = screen.getByTestId("button");
        
        expect(button).not.toHaveClass(styles.secondary);
        
        render(<Button secondary />, {container});
        
        expect(button).toHaveClass(styles.secondary);
    });
    
    it('to have secondary & disabled class', () => {
        const {container} = render(<Button>test</Button>);
        const button = screen.getByTestId("button");
    
        expect(button).not.toHaveClass(styles.secondary);
        expect(button).not.toHaveClass(styles.disabled);
        
        render(<Button secondary disabled />, {container});
        
        expect(button).toHaveClass(styles.secondary);
        expect(button).toHaveClass(styles.disabled);
    });
    
    it('to be called onClick', () => {
        const mockOnClick = jest.fn();
        
        render(<Button onClick={mockOnClick}>test</Button>);
        const button = screen.getByTestId("button");
        
        button.click();
        
        expect(mockOnClick).toBeCalledTimes(1);
    });
    
    it('to not be called onClick because is disabled', () => {
        const mockOnClick = jest.fn();
        
        render(<Button disabled onClick={mockOnClick}>test</Button>);
        const button = screen.getByTestId("button");
        
        button.click();
        
        expect(mockOnClick).toBeCalledTimes(0);
    });
})