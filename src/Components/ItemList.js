import addClothingItem from "./Data"
import Clothing from "../Components/GenerateButton"
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


export default function ItemList(props) {
    let dataVar = addClothingItem("", "", "");

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Shirts" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        Object.keys(dataVar.Shirts).map(function (element, index) {
                            return <ListItem key={index} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon />
                                </ListItemIcon>
                                {/* <ListItem key={index}> */}
                                <ListItemText primary={dataVar.Shirts[element].name} />
                                    <ListItemButton>
                                        <AutoFixHighIcon onClick={() => {}}/>
                                    </ListItemButton>
                                {/* </ListItem> */}
                            </ListItem>
                        })
                    }
                </List>
            </Collapse>
            {
                Object.keys(dataVar.Pants).map(function (element, index) {
                    return <ListItem button key={index}>
                        <ListItemText primary={dataVar.Pants[element].name} />
                    </ListItem>
                })
            }
            {
                Object.keys(dataVar.Shoes).map(function (element, index) {
                    return <ListItem button key={index}>
                        <ListItemText primary={dataVar.Shoes[element].name} />
                    </ListItem>
                })
            }
        </List >
    )
}