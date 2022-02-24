export default function Data(newName, newColor, newType) {
    var dataOBJ;

    //If there is no localstorage, use defaults below
    if (!localStorage.getItem('Clothes')) {
        // dataOBJ = { Clothes: { Item1: { name: "striped shirt", color: "red", type: "shirt" }, Item2: { name: "solid shirt", color: "blue", type: "shirt" } } };
        dataOBJ = { Clothes: {} };
    } else {     //if it does exist; convert from json to JavascriptOBJ
        dataOBJ = JSON.parse(localStorage.getItem("Clothes"));
    }

    //If all inputs are filled, create new item in dataOBJ
    if (newName !== "" && newColor !== "") {
        let numName = Object.keys(dataOBJ.Clothes).length + 1;
        console.log("Before");
        console.log(dataOBJ);
        dataOBJ.Clothes[numName] = {};
        dataOBJ.Clothes[numName].name = newName;
        dataOBJ.Clothes[numName].color = newColor;
        dataOBJ.Clothes[numName].type = newType;
        console.log("After");
        console.log(dataOBJ);
        console.log(JSON.stringify(dataOBJ, null, 4));
    } else {
        console.log("No inputs");
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