
// This function isn't a component so it probably shouldn't be capitalized (it's a best practice thing). 
// Since it's not a component. It's sometimes helpful to include a verb in the function name since the function is actually DOING something.
// Also avoid using generic terms like `Data` in variable names. Imagine adding a bunch of code to this repository. If you have to figure out which "Data" function you need it can get confusing.
// "addArticle" or "addClothingItem" would be good alternatives. 
// Naming stuff takes practice and experinece but these are some good general rules for helping 
export default function Data(newName, newColor, newType) {
    // Use "let" or "const". In modern javascript you rarely need to use var.
    var dataOBJ;

    //If there is no localstorage, use defaults below
    if (!localStorage.getItem('Clothes')) {
        dataOBJ = { Shirts: {}, Pants: {}, Shoes: {} };
    } else {     //if it does exist; convert from json to JavascriptOBJ
        dataOBJ = JSON.parse(localStorage.getItem("Clothes"));
    }

    //If all inputs are filled, create new item in dataOBJ
    if (newName !== "" && newColor !== "") {
        if (newType === "shirts") {
            // DRY: (Don't repeat yourself). Computers are built to automate boring tasks away.
            // These lines of code are really similar and if you have to update an instance 
            // you'll probably have to update the others. That could get annoying. 
            let numName = Object.keys(dataOBJ.Shirts).length + 1;
            dataOBJ.Shirts[numName] = {};
            dataOBJ.Shirts[numName].name = newName;
            dataOBJ.Shirts[numName].color = newColor;
            dataOBJ.Shirts[numName].type = newType;
            // BEST PRACTICE: Something like the below might be a bit easier to understand than the code you have above.
            dataOBJ.Shirts[numName] = {
                name: newName,
                color: newColor,
                type: newType,
            };
        } else if (newType === "pants") {
            // DRY
            let numName = Object.keys(dataOBJ.Pants).length + 1;
            dataOBJ.Pants[numName] = {};
            dataOBJ.Pants[numName].name = newName;
            dataOBJ.Pants[numName].color = newColor;
            dataOBJ.Pants[numName].type = newType;
        } else if (newType === "shoes") {
            // DRY
            let numName = Object.keys(dataOBJ.Shoes).length + 1;
            dataOBJ.Shoes[numName] = {};
            dataOBJ.Shoes[numName].name = newName;
            dataOBJ.Shoes[numName].color = newColor;
            dataOBJ.Shoes[numName].type = newType;
        }
        console.log(JSON.stringify(dataOBJ, null, 4));
    } else {
        console.log("No inputs");
        console.log(JSON.stringify(dataOBJ, null, 4));
    }

    // Update LocalStorage object with dataOBJ
    localStorage.setItem("Clothes", JSON.stringify(dataOBJ));

    return (dataOBJ);

}





//////////////////////////////////////////////////////////////
//Old code for reference

// const Save = () => {

//     let current = JSON.parse(localStorage.getItem('Data')) || {Clothes:[]};
//     console.log(current);
//     current.Clothes.push(document.getElementById('data').value);
//     localStorage.setItem('Data', JSON.strin gify(current));
//     document.getElementById("test").innerText = localStorage.getItem("Data");
//     document.getElementById('list').innerHTML = '';
//     current.Clothes.forEach(element => {
//         let lis = document.createElement("div");
//         lis.innerHTML= element;
//         document.getElementById('list').appendChild(lis);
//     });
// }

// var element = (
//     <div>
//         <h1 id="test">{localStorage.getItem("Data")}</h1>
//         <textarea id="data"></textarea>
//         <button onClick={Save}>
//             Save
//         </button>
//         <div id="list">

//         </div>
//     </div>
// );