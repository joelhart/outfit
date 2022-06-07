import { findAllByTestId, render, screen } from '@testing-library/react';
import Clothing, {storeData, clearData} from "./Clothing"
import addClothingItem from "./Data"
import App from "../App"


describe('Clothing Component Testing', () => {
    render(<App />)
    test('storeData', () => {
        document.getElementById('Name').value = "Striped";
        document.getElementById('Color').value = "#FF0000";
        document.getElementById('Type').value = "Shirts";

        storeData;
        expect(localStorage.length).toBeGreaterThan(0);
    });
});

