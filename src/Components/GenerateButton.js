// import "./style_test.css" //haven't quite figured out how to get this to work
import Data from "./Data"

export default function Clothing() {

    function click() {
        // Defaults
        let dataVar = Data("", "", "");
        let tempShirt = "None";
        let tempPant = "None";
        let tempShoe = "None";

        // DRY: getRandomInRange(0, dataVar.Shirts.length)
        if (Object.keys(dataVar.Shirts).length > 0) {
            tempShirt = dataVar.Shirts[Math.floor((Math.random() * Object.keys(dataVar.Shirts).length)) + 1].name;
        }
        if (Object.keys(dataVar.Pants).length > 0) {
            tempPant= dataVar.Pants[Math.floor((Math.random() * Object.keys(dataVar.Pants).length)) + 1].name;
        }
        if (Object.keys(dataVar.Shoes).length > 0) {
            //STYLE: also typically you camelCase attribute names dataVar.Shoes -> dataVar.shoes
            tempShoe= dataVar.Shoes[Math.floor((Math.random() * Object.keys(dataVar.Shoes).length)) + 1].name;
        }
        alert(tempShirt + " " + tempPant + " " + tempShoe);
    }

    return (
        <button onClick={click}>
            Generate
        </button>
        
    )
} 