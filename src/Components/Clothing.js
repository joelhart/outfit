import Data from "./Data"
import { useRef } from 'react';

export default function Clothing() {

    const ref = useRef();

    function storeData(event) {
        event.preventDefault();
        let newName = document.getElementById('Name').value;
        let newColor = document.getElementById('Color').value;
        let newType = document.getElementById('Type').value;

        Data(newName, newColor, newType);
    }

    //temporary
    function clearData() {
        localStorage.clear();
    }

    return (
        <div>
            <form ref={ref} onSubmit={storeData}>
                <label>Name</label>
                <input type="text" id="Name"></input>
                <label>Color</label>
                <input type="text" id="Color"></input>
                <label>Type</label>
                <select type="text" id="Type">
                    <option value="shirts">Shirts</option>
                    <option value="pants">Pants</option>
                    <option value="shoes">Shoes</option>
                </select>
                <input type="submit" />
            </form>
            {/* Temporary */}
            <button onClick={clearData}>Clear Data</button>
        </div>
    )

}






////////////////////////////////////////
//Old code for reference

        // for (let i = 0; i < collection.length; i++) {
        //     if (localStorage.getItem(collection[i].id) === 'false') {
        //         localStorage.setItem(collection[i].id, 'true')
        //     } else
        //         localStorage.setItem(collection[i].id, 'false')
        // }

        // ref.current.getElementsByClassName('lbl').forEach((e) => {
        //     console.log(e);
        //     if (localStorage.getItem(e.id) === 'false') {
        //         localStorage.setItem(e.id, 'true')
        //     } else
        //     localStorage.setItem(e.id, 'false')
        // });

    // ref.current.getElementsByTagName('input').forEach(element => {
    //     element.addEventListener("click",
    // });