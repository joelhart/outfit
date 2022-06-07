import { findAllByTestId, render, screen } from '@testing-library/react';
import { hexToComplimentary } from './GenerateButton';
import App from "../App"

describe('OutfitOutput Component Testing', () => {
    render(<App />)
    test('Result is Rendered Correctly', () => {
        const linkElement = screen.getByText(/Outfit Result/i);
        expect(linkElement).toBeInTheDocument();
    });

});