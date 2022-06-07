import "./styles.css"
import addClothingItem from "./Data"
import React from 'react'
// import {useState} from 'react'

//Color theory color combos
var primary = {
    Brown: ["Black", "White", "Brown"],
    Black: ["Brown", "White", "Black"],
    White: ["Brown", "Black", "White", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    Red: ["Black", "White", "Orange", "Yellow", "Red"],
    Orange: ["Red", "Black", "White", "Yellow", "Orange"],
    Yellow: ["Black", "White", "Red", "Orange", "Blue", "Green", "Purple", "Yellow"],
    Green: ["Black", "White", "Yellow", "Blue", "Purple", "Green"],
    Blue: ["Black", "White", "Yellow", "Green", "Blue"],
    Purple: ["Black", "White", "Yellow", "Purple"]
}

// Function to render the random generation button
export default function Clothing() {

    return (
        <div>
            &nbsp;
            <div className="row">
                {/* <input id="Combo" ref={getCombination} type="text" /> */}
                {/* <button>Get Combination</button> */}
                <button className="resizeFormElements" onClick={getRandomCombo}>Get Random</button>
            </div>
            <div className="result">
                {/* <div>{message + '\n' + foundPants + '\n' + foundShoes}</div> */}
            </div>
        </div>
    )

}

//Function to calculate complimentary colors from a hex value
export function hexToComplimentary(hex) {
    // https://stackoverflow.com/questions/1664140/js-function-to-calculate-complementary-colour

    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function (l) { return parseInt(hex.length % 2 ? l + l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    var r = rgb[0], g = rgb[1], b = rgb[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2.0;

    if (max === min) {
        h = s = 0;  //achromatic
    } else {
        var d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if (max === r && g >= b) {
            h = 1.0472 * (g - b) / d;
        } else if (max === r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if (max === g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if (max === b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h += 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    rgb = b | (g << 8) | (r << 16);
    return "#" + (0x1000000 | rgb).toString(16).substring(1);
}

// Function for generating an outfit with the outfit generation algorithm
export function Generate(clickedItem) {

    //Default color values
    document.getElementById('shirtOutput').style.color = "white";
    document.getElementById('pantOutput').style.color = "white";
    document.getElementById('shoeOutput').style.color = "white";

    let selection = "", foundPants = "", foundShoes = "";
    let dataVar = addClothingItem("", "", "");

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
      
    // To Fix variable issue
    /* eslint-disable */
    for (let x in dataVar.Shirts) {
        //If a shirt is found with that name
        if (dataVar.Shirts[x].name === clickedItem.name) {
            selection = dataVar.Shirts[x];
            //Find matching pants
            shuffle(primary[selection.colorName]);
            primary[selection.colorName].forEach(color => {
                for (let element in dataVar.Pants) {
                    if (dataVar.Pants[element].colorName === color) {
                        foundPants = dataVar.Pants[element].name;
                    }
                }
            });
            if (foundPants === "") { foundPants = "No Match Found" }
            //Find matching shoes
            shuffle(primary[selection.colorName]);
            primary[selection.colorName].forEach(color => {
                for (let element in dataVar.Shoes) {
                    if (dataVar.Shoes[element].colorName === color) {
                        foundShoes = dataVar.Shoes[element].name;
                    }
                }
            });
            if (foundShoes === "") { foundShoes = "No Match Found" }
            break;
        }
    }
    /* eslint-enable */

    //No Shirt named that
    if (selection === "") {
        foundPants = "Sorry, No Item Found. Try Refreshing";
        foundShoes = "";
    }

    //UPDATE OUTPUT
    if (selection.name === null) {
        document.getElementById('shirtOutput').innerText = "";
    } else {
        document.getElementById('shirtOutput').innerText = selection.name;
    }
    document.getElementById('pantOutput').innerText = foundPants;
    document.getElementById('shoeOutput').innerText = foundShoes;
}

// Function called in return for random combination
function getRandomCombo() {
    // Defaults
    let dataVar = addClothingItem("", "", "");
    let tempShirt = { "name": "None", "color": "None", "type": "None" };
    let tempPant = tempShirt;
    let tempShoe = tempShirt;
    document.getElementById('shirtOutput').style.color = "white";
    document.getElementById('pantOutput').style.color = "white";
    document.getElementById('shoeOutput').style.color = "white";

    //See if there are shirts or not
    if (Object.keys(dataVar.Shirts).length > 0) {
        tempShirt = dataVar.Shirts[Math.floor((Math.random() * Object.keys(dataVar.Shirts).length)) + 1];
    } else {
        alert("Incomplete Data, Try Adding Some Shirts");
    }

    //See if there are pants or not
    if (Object.keys(dataVar.Pants).length > 0) {
        tempPant = dataVar.Pants[Math.floor((Math.random() * Object.keys(dataVar.Pants).length)) + 1];
    } else {
        if (Object.keys(dataVar.Shirts).length > 0) {
            tempPant.name = "No Match, Try This Color With The Shirt: " + hexToComplimentary(tempShirt.color);
            document.getElementById('pantOutput').style.color = hexToComplimentary(tempShirt.color);

        } else if (Object.keys(dataVar.Shoes).length > 0) {
            tempPant.name = "No Match, Try This Color With The Shoes: " + hexToComplimentary(tempShoe.color);
            document.getElementById('pantOutput').style.color = hexToComplimentary(tempShoe.color);

        } else {
            alert("Incomplete Data, Try Adding Some Pants");
            return;
        }
    }

    //See if there are shoes or not
    if (Object.keys(dataVar.Shoes).length > 0) {
        tempShoe = dataVar.Shoes[Math.floor((Math.random() * Object.keys(dataVar.Shoes).length)) + 1];
    } else {
        if (Object.keys(dataVar.Shirts).length > 0) {
            tempShoe.name = "No Match, Try This Color With The Shirt: " + hexToComplimentary(tempShirt.color);
            document.getElementById('shoeOutput').style.color = hexToComplimentary(tempShirt.color);

        } else if (Object.keys(dataVar.Pants).length > 0) {
            tempShoe.name = "No Match, Try This Color With The Pants: " + hexToComplimentary(tempPant.color);
            document.getElementById('shoeOutput').style.color = hexToComplimentary(tempPant.color);

        } else {
            alert("Incomplete Data, Try Adding Some Items");
            return;
        }
    }

    document.getElementById('shirtOutput').innerText = tempShirt.name;
    document.getElementById('pantOutput').innerText = tempPant.name;
    document.getElementById('shoeOutput').innerText = tempShoe.name;
}