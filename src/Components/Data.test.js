import { findAllByTestId, render, screen } from '@testing-library/react';
import Data from "./Data"

describe('Data Component Testing', () => {
    test('Submit with data', () => {
        expect(Data("Striped", "Red", "shirt")).toEqual({ Clothes: { 1: { name: "Striped", color: "Red", type: "shirt" } } });
    });
});

