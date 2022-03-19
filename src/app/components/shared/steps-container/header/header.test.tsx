import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {StepsContainerHeader} from "./header.component";
import styles from './header.module.sass';

describe('StepsContainerHeader', () => {

    it('render steps container header', () => {
        render(<StepsContainerHeader length={3} current={0}/>);
        const header = screen.getByTestId("steps-container-header");

        expect(header).toBeInTheDocument();
    });

    it('render 3 options and 2 lines', () => {
        render(<StepsContainerHeader length={3} current={0}/>);
        const optionList = screen.queryAllByTestId("steps-container-header-option");
        const lineList = screen.queryAllByTestId("steps-container-header-line");

        expect(optionList.length).toEqual(3);
        expect(lineList.length).toEqual(2);
    });

    it('render 3 options, second one selected and first one done', () => {
        render(<StepsContainerHeader length={3} current={1}/>);
        const [optionDone, optionSelected] = screen.queryAllByTestId("steps-container-header-option");

        expect(optionDone).toHaveClass(styles.done);
        expect(optionSelected).toHaveClass(styles.selected);
    });
})