// import "./style_test.css" //haven't quite figured out how to get this to work
import Data from "./Data"

export default function Clothing() {

    function click() {
        // let rand = Math.floor((Math.random() * 5) + 1);
        // alert(rand + " " + localStorage.getItem(rand))
        let dataVar = Data("", "", "");
        // console.log(dataVar.Clothes)
        
    }

    return (
        <button onClick={click}>
            Generate
        </button>
        
    )
} 