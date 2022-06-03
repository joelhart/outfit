import addClothingItem from "./Data"
import React from 'react'
// import {useState} from 'react'
import "./styles.css"

// Function used to render the submission form elements
export default function Clothing() {

    // const [state, setstate] = useState({ data: "" })

    // const changeState = () => {
    //     setstate({
    //         data: `state/props of parent component 
    //     is send by onClick event to another component`});
    // };

    const ref = React.useRef();

    function storeData(event) {
        event.preventDefault();
        let newName = document.getElementById('Name').value;
        let newColor = document.getElementById('Color').value;
        let newType = document.getElementById('Type').value;

        addClothingItem(newName, newColor, newType);
    }

    function clearData() {
        localStorage.clear();
    }

    //SAVE FOR FUTURE DEVELOPMENT
    // let removeItemName = React.createRef();  // React use ref to get input value
    // let removeItemType = React.createRef();  // React use ref to get input value
    // let clickRemoveItem = (e) => {
    //     removeClothingItem(removeItemName.current.value, removeItemType.current.value);
    // };

    // const { inc } = useCounter();

    return (
        <div>
            <div className="row">
                <div>
                    <form id="FormId" ref={ref} onSubmit={storeData} style={{ width: '100%' }}>
                        <div className="column">
                            <div><label><b>Add Item:</b></label></div>
                            <div className="break"></div>
                            <div>
                                <label>Name</label>
                                <input className="resizeFormElements texta" type="text" id="Name"></input>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <label>Color</label>
                                <select className="resizeFormElements" type="text" id="Color">
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
                            </div>
                        </div>
                        <label>Type</label>
                        <select className="resizeFormElements" type="text" id="Type">
                            <option value="Shirts">Shirts</option>
                            <option value="Pants">Pants</option>
                            <option value="Shoes">Shoes</option>
                        </select>
                        <div className="column">
                            <div>
                                <input className="resizeFormElements" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="break"></div>
                <div>
                    <div className="column">
                        <div>
                            <button className="resizeFormElements" onClick={clearData}>Clear Data</button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* SAVE FOR FUTURE DEVELOPMENT */}
                    {/* <select ref={removeItemType} type="text" id="Type">
                        <option value="Shirts">Shirts</option>
                        <option value="Pants">Pants</option>
                        <option value="Shoes">Shoes</option>
                    </select> */}
                    {/* <input ref={removeItemName} type="text" />
                    <button onClick={clickRemoveItem}>Remove Item</button>
                    <button onClick={inc}>Test</button> */}
                </div>
            </div>
        </div>
    )

}