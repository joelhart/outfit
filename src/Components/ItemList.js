import addClothingItem from "./Data"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React, { useState } from 'react'

export default function ItemList(props) {
    let dataVar = addClothingItem("", "", "");
 
    // return (
    //     <List>
    //         {Object.keys(dataVar).forEach(category => {
    //             Object.keys(dataVar[category]).map(function (elem, index) {
    //                 // console.log(dataVar[category][elem]);
    //                 console.log(elem);
    //                 return <ListItem key={index}>
    //                     <ListItemText primary="Test"/>
    //                 </ListItem>
    //             })
    //         })}
    //     </List>
    // )

    return (
            <List>
                {Object.keys(dataVar.Shirts).map(function (element, index) {
                    return <ListItem button key={index}>
                        <ListItemText primary={dataVar.Shirts[element].name} />
                    </ListItem>
                })}
                {Object.keys(dataVar.Pants).map(function (element, index) {
                    return <ListItem button key={index}>
                        <ListItemText primary={dataVar.Pants[element].name} />
                    </ListItem>
                })}
                {Object.keys(dataVar.Shoes).map(function (element, index) {
                    return <ListItem button key={index}>
                        <ListItemText primary={dataVar.Shoes[element].name} />
                    </ListItem>
                })}
            </List>
    )
}