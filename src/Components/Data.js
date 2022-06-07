// Add a clothing item to the wardrobe element
export default function addClothingItem(newName, newColor, newType) {
    var dataOBJ;

    //If there is no localstorage, use defaults below
    if (!localStorage.getItem('Clothes')) {
        dataOBJ = { Shirts: {}, Pants: {}, Shoes: {} };
    } else {     //if it does exist; convert from json to JavascriptOBJ
        dataOBJ = JSON.parse(localStorage.getItem("Clothes"));
    }

    //If all inputs are filled, create new item in dataOBJ
    if (newName !== "" && newColor !== "") {
        // console.log(dataOBJ[newType]);
        let numName = Object.keys(dataOBJ[newType]).length + 1;
        dataOBJ[newType][numName] = {};
        dataOBJ[newType][numName].name = newName;
        dataOBJ[newType][numName].color = newColor;
        dataOBJ[newType][numName].type = newType;

        //Convert Hex to general color term
        if (newColor === "#8B4513") {
            dataOBJ[newType][numName].colorName = "Brown";
        } else if (newColor === "#000000") {
            dataOBJ[newType][numName].colorName = "Black";
        } else if (newColor === "#FFFFFF") {
            dataOBJ[newType][numName].colorName = "White";
        } else if (newColor === "#FF0000") {
            dataOBJ[newType][numName].colorName = "Red";
        } else if (newColor === "#FFA500") {
            dataOBJ[newType][numName].colorName = "Orange";
        } else if (newColor === "#FFFF00") {
            dataOBJ[newType][numName].colorName = "Yellow";
        } else if (newColor === "#00FF00") {
            dataOBJ[newType][numName].colorName = "Green";
        } else if (newColor === "#0000FF") {
            dataOBJ[newType][numName].colorName = "Blue";
        } else if (newColor === "#A020F0") {
            dataOBJ[newType][numName].colorName = "Purple";
        }

        // console.log(JSON.stringify(dataOBJ, null, 4));
    } else {
        // console.log("No inputs");
    }

    // Update LocalStorage object with dataOBJ
    localStorage.setItem("Clothes", JSON.stringify(dataOBJ));

    return (dataOBJ);

}

// console.log(addClothingItem("test1", "test2", "test3"));

// Function for removal of items
export function removeClothingItem(name, type) {
    var dataOBJ;

    //If there is no localstorage, use defaults below
    if (!localStorage.getItem('Clothes')) {
        alert("Sorry, No Clothes Exist");
    } else {     //if it does exist; convert from json to JavascriptOBJ
        dataOBJ = JSON.parse(localStorage.getItem("Clothes"));
    }

    //Remove Item (SAVE FOR FUTURE DEVELOPEMNT)
    // console.log(Object.keys(dataOBJ[type]).length);
    // for(let i = 1; i<=Object.keys(dataOBJ[type]).length; i++) {
    //     let element = dataOBJ[type][i];
    //     console.log(dataOBJ[type]);
    //     if (element.name == name) {
    //         console.log("match");
    //         delete dataOBJ[type][i];
    //         alert("Removed: " + dataOBJ[type][i] + " Successfully!")
    //         // Update LocalStorage object with dataOBJ
    //         localStorage.setItem("Clothes", JSON.stringify(dataOBJ));
    //         return;
    //     }
    // }
    for (const element of Object.entries(dataOBJ[type])) {
        console.log(element[1].name);
        if (element[1].name === name) {
            delete dataOBJ[type][element];
            alert("Removed: " + dataOBJ[type][element] + " Successfully!")

            // Update LocalStorage object with dataOBJ
            localStorage.setItem("Clothes", JSON.stringify(dataOBJ));
            return;
        }
    }
    alert("No Item Found");
}