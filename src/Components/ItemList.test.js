import { findAllByTestId, render, screen } from '@testing-library/react';
import App from "../App"
import React from 'react'
// import {screen} from '@testing-library/dom'

describe('ItemList Component Testing', () => {
    render(<App />)
    test('ItemList is Rendered Correctly', () => {
        const linkElement = screen.getByTestId('listItem')
        expect(linkElement).toBeInTheDocument();
    });

});