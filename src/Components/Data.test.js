import { findAllByTestId, render, screen } from '@testing-library/react';
import addClothingItem from "./Data"

describe('Data Component Testing', () => {
    test('Submit with data', () => {
        expect(addClothingItem("Striped", "#FF0000", "Shirts")).toEqual(
            {
                "Shirts": {
                    "1": {
                        "name": "Striped",
                        "color": "#FF0000",
                        "type": "Shirts",
                        "colorName": "Red"
                    }
                },
                "Pants": {},
                "Shoes": {}
            }
        );
    });
});

