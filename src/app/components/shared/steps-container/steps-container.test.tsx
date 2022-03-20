import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import {StepsContainer} from "./steps-container.component";

describe('StepsContainer', () => {

    const stepsContainer = (
        <StepsContainer>
            <div>Step 1</div>
            <div>Step 2</div>
            <div>Step 3</div>
        </StepsContainer>
    )
    
    it('render steps container', () => {
        render(stepsContainer);
        const _stepsContainer = screen.getByTestId("steps-container");

        expect(_stepsContainer).toBeInTheDocument();
    });
    
    it('render steps container header', () => {
        render(stepsContainer);
        const _stepsContainerHeader = screen.getByTestId("steps-container-header");
        
        expect(_stepsContainerHeader).toBeInTheDocument();
    });
    
    it('render steps container content', () => {
        render(stepsContainer);
        const _stepsContainerContent = screen.getByTestId("steps-container-content");
        
        expect(_stepsContainerContent).toBeInTheDocument();
    });
    
    it('render steps container children', () => {
        render(stepsContainer);
        const _stepsContainerChildren = screen.getByTestId("steps-container-children");
        
        expect(_stepsContainerChildren).toBeInTheDocument();
    });
    
    it('render steps container footer', () => {
        render(stepsContainer);
        const _stepsContainerFooter = screen.getByTestId("steps-container-footer");
        
        expect(_stepsContainerFooter).toBeInTheDocument();
    });
    
    it('render step 1', () => {
        render(stepsContainer);
    
        const _stepsContainerStep = screen.getByText("Step 1");
    
        expect(_stepsContainerStep).toBeInTheDocument();
    });
    
    it('render step 2', () => {
        render(stepsContainer);
        
        const [_, buttonNext] = screen.queryAllByTestId('button');
        
        buttonNext.click();
        
        const _stepsContainerStep = screen.getByText("Step 2");
    
        expect(_stepsContainerStep).toBeInTheDocument();
    });
    
    it('render step 3', () => {
        render(stepsContainer);
        
        const [_, buttonNext] = screen.queryAllByTestId('button');
        
        buttonNext.click();
        buttonNext.click();
        
        const _stepsContainerStep = screen.getByText("Step 3");
        
        expect(_stepsContainerStep).toBeInTheDocument();
    });
    
    it('can go next and previous', () => {
        render(stepsContainer);
        
        const [_, buttonNext1] = screen.queryAllByTestId('button');
        
        let _stepsContainerStep = screen.getByText("Step 1");
        expect(_stepsContainerStep).toBeInTheDocument();

        buttonNext1.click();
        _stepsContainerStep = screen.getByText("Step 2");
        expect(_stepsContainerStep).toBeInTheDocument();

        const [buttonPrevious2] = screen.queryAllByTestId('button');

        buttonPrevious2.click();
        _stepsContainerStep = screen.getByText("Step 1");
        expect(_stepsContainerStep).toBeInTheDocument();
        
    });
    
    
});