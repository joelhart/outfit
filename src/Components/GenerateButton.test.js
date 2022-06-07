import { findAllByTestId, render, screen } from '@testing-library/react';
import { hexToComplimentary } from './GenerateButton';
import App from "../App"


describe('GenerateButton Component Testing', () => {
    render(<App />)
    test('Clothing is Rendered', () => {
        const linkElement = screen.getByText(/Get Random/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('hexToComplementary Function Works', () => {
        expect(hexToComplimentary('#123456')).toEqual('#563412');
    });

    test('getRandomCombo Function Works', () => {
        //no return value
    });

});