import addClothingItem from "./Data"
import { removeClothingItem } from "./Data"
import React, { useState } from 'react'
import ItemList from "./ItemList"
import {useCounter} from "../store/counter";

export default function Clothing() {

    const [state, setstate] = useState({data:""})

    const changeState = () => {
        setstate({data:`state/props of parent component 
        is send by onClick event to another component`});
       };

    const ref = React.useRef();

    function storeData(event) {
        event.preventDefault();

        //BEST PRACTICE: This isn't a very react way of getting values form the dom but it works!
        let newName = document.getElementById('Name').value;
        let newColor = document.getElementById('Color').value;
        let newType = document.getElementById('Type').value;

        addClothingItem(newName, newColor, newType);
    }

    //temporary
    function clearData() {
        localStorage.clear();
    }

    let removeItemName = React.createRef();  // React use ref to get input value
    let removeItemType = React.createRef();  // React use ref to get input value
    let clickRemoveItem = (e) => {
        removeClothingItem(removeItemName.current.value, removeItemType.current.value);
    };

    const {inc} = useCounter();

    return (
        <div>
            <div>
                <form ref={ref} onSubmit={storeData}>
                    <label>Name</label>
                    <input type="text" id="Name"></input>
                    <label>Color</label>
                    <select type="text" id="Color">
                        <option value="#8B4513">Brown</option>
                        <option value="#000000">Black</option>
                        <option value="#FFFFFF">White</option>
                        <option value="#FF0000">Red</option>
                        <option value="#FFA500">Orange</option>
                        <option value="#FFFF00">Yellow</option>
                        <option value="#00FF00">Green</option>
                        <option value="#0000FF">Blue</option>
                        <option value="#A020F0">Purple</option>
                    </select>
                    <label>Type</label>
                    <select type="text" id="Type">
                        <option value="Shirts">Shirts</option>
                        <option value="Pants">Pants</option>
                        <option value="Shoes">Shoes</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
            <div>
                {/* Temporary */}
                <button onClick={clearData}>Clear Data</button>
            </div>
            <div>
                <select ref={removeItemType} type="text" id="Type">
                    <option value="Shirts">Shirts</option>
                    <option value="Pants">Pants</option>
                    <option value="Shoes">Shoes</option>
                </select>
                <input ref={removeItemName} type="text" />
                <button onClick={clickRemoveItem}>Remove Item</button>
                <button onClick={inc}>Test</button>
            </div>
            {/* <ItemList data={state.data} /> */}
        </div>
    )

}
