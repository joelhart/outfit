// import "./style_test.css" //haven't quite figured out how to get this to work
import addClothingItem from "./Data"
import React, { useState } from 'react';
import OutfitOutput from "./OutfitOutput";

export default function Clothing() {
    let getCombination = React.createRef();  // React use ref to get input value
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

    function hexToComplimentary(hex) {
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

        if (max == min) {
            h = s = 0;  //achromatic
        } else {
            var d = max - min;
            s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

            if (max == r && g >= b) {
                h = 1.0472 * (g - b) / d;
            } else if (max == r && g < b) {
                h = 1.0472 * (g - b) / d + 6.2832;
            } else if (max == g) {
                h = 1.0472 * (b - r) / d + 2.0944;
            } else if (max == b) {
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

    function updateOutput() {
        if (selection.name == null) {
            document.getElementById('shirtOutput').innerText = "";
        } else {
            document.getElementById('shirtOutput').innerText = selection.name;
        }
        document.getElementById('pantOutput').innerText = foundPants;
        document.getElementById('shoeOutput').innerText = foundShoes;

    }

    let selection = "", foundPants = "", foundShoes = "";
    let [message, setMessage] = useState('');
    function GetCombo() {
        let dataVar = addClothingItem("", "", "");
        for (let x in dataVar.Shirts) {
            //If a shirt is found with that name
            if (dataVar.Shirts[x].name == document.getElementById('Combo').value) {
                selection = dataVar.Shirts[x];
                //Find matching pants
                primary[selection.colorName].forEach(color => {
                    for (let element in dataVar.Pants) {
                        if (dataVar.Pants[element].colorName == color) {
                            // console.log("Found Match" + dataVar.Pants[element].colorName);
                            foundPants = "Recommended Color: " + dataVar.Pants[element].colorName;
                        }
                    }
                });
                if (foundPants == "") { foundPants = "No Match Found" }
                console.log(foundPants);
                //Find matching shoes
                primary[selection.colorName].forEach(color => {
                    for (let element in dataVar.Shoes) {
                        if (dataVar.Shoes[element].colorName == color) {
                            // console.log("Found Match" + dataVar.Shoes[element].colorName);
                            foundShoes = "Recommended Color: " + dataVar.Shoes[element].colorName;
                        }
                    }
                });
                if (foundShoes == "") { foundShoes = "No Match Found" }
                // document.getElementsByClassName('result')[0].innerHTML = selection.name + '&#10' + foundPants + '&#10' + foundShoes + "HI";
                // document.getElementById('Combo').value = selection.name;
                updateOutput();
                break;
            }
        }

        //No Shirt named that
        if (selection == "") {
            foundPants = "Sorry, No Shirt With That Name";
            foundShoes = "";
            updateOutput();
        }
    }

    function getRandomCombo() {
        // Defaults
        let dataVar = addClothingItem("", "", "");
        let tempShirt = { "name": "None", "color": "None", "type": "None" };
        let tempPant = tempShirt;
        let tempShoe = tempShirt;

        if (Object.keys(dataVar.Shirts).length > 0) {
            tempShirt = dataVar.Shirts[Math.floor((Math.random() * Object.keys(dataVar.Shirts).length)) + 1];
        } else {
            if (Object.keys(dataVar.Pants).length > 0) {
                tempShirt.name = "No Item Found, Try This Color With The Pants: " + hexToComplimentary(tempPant.color);
            } else if (Object.keys(dataVar.Shoes).length > 0) {
                tempShirt.name = "No Item Found, Try This Color With The Shoes: " + hexToComplimentary(tempShoe.color);
            } else {
                alert("Incomplete Data");
                return;
            }
        }
        if (Object.keys(dataVar.Pants).length > 0) {
            tempPant = dataVar.Pants[Math.floor((Math.random() * Object.keys(dataVar.Pants).length)) + 1];
        } else {
            if (Object.keys(dataVar.Shirts).length > 0) {
                tempPant.name = "No Item Found, Try This Color With The Shirt: " + hexToComplimentary(tempShirt.color);
            } else if (Object.keys(dataVar.Shoes).length > 0) {
                tempPant.name = "No Item Found, Try This Color With The Shoes: " + hexToComplimentary(tempShoe.color);
            } else {
                alert("Incomplete Data");
                return;
            }
        }
        if (Object.keys(dataVar.Shoes).length > 0) {
            tempShoe = dataVar.Shoes[Math.floor((Math.random() * Object.keys(dataVar.Shoes).length)) + 1];
        }
        // if (tempShirt.color == "None") {
        //     if (Object.keys(dataVar.Pants).length > 0) {
        //         tempShirt.name = "No Item Found, Try This Color With The Pants: " + hexToComplimentary(tempPant.color);
        //     } else if (Object.keys(dataVar.Shoes).length > 0) {
        //         tempShirt.name = "No Item Found, Try This Color With The Shoes: " + hexToComplimentary(tempShoe.color);
        //     } else {
        //         alert("Incomplete Data");
        //         return;
        //     }
        // }
        // if (tempPant.color == "None") {
        //     if (Object.keys(dataVar.Shirts).length > 0) {
        //         tempPant.name = "No Item Found, Try This Color With The Shirt: " + hexToComplimentary(tempShirt.color);
        //     } else if (Object.keys(dataVar.Shoes).length > 0) {
        //         tempPant.name = "No Item Found, Try This Color With The Shoes: " + hexToComplimentary(tempShoe.color);
        //     } else {
        //         alert("Incomplete Data");
        //         return;
        //     }
        // }

        // console.log(tempShirt.name + '\n' + tempPant.name + '\n' + tempShoe.name);
        // alert(tempShirt.name + '\n' + tempPant.name + '\n' + tempShoe.name);
        document.getElementsByClassName('result')[0].innerHTML = tempShirt.name + '\n' + tempPant.name + '\n' + tempShoe.name;
    }

    return (
        <div>
            <div className="row">
                <input id="Combo" ref={getCombination} type="text" />
                <button onClick={GetCombo}>Get Combination</button>
                <button onClick={getRandomCombo}>Get Random</button>
            </div>
            <div className="result">
                <div>{message + '\n' + foundPants + '\n' + foundShoes}</div>
            </div>
        </div>
    )
} 