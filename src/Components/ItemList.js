import addClothingItem from "./Data"
import {Generate} from "../Components/GenerateButton"
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
// import {useState} from 'react'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckroomIcon from '@mui/icons-material/Checkroom';

// Function for rendring the current wardrobe component
export default function ItemList(props) {
    let dataVar = addClothingItem("", "", "");

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List data-testid="listItem">
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CheckroomIcon />
                </ListItemIcon>
                <ListItemText className="listItemText" primary="Shirts" />
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
                                <ListItemText primary={dataVar.Shirts[element].name} />
                                    <ListItemButton>
                                        <AutoFixHighIcon onClick={() => {Generate(dataVar.Shirts[element])}}/>
                                    </ListItemButton>
                            </ListItem>
                        })
                    }
                </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CheckroomIcon />
                </ListItemIcon>
                <ListItemText className="listItemText" primary="Pants" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        Object.keys(dataVar.Pants).map(function (element, index) {
                            return <ListItem key={index} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon />
                                </ListItemIcon>
                                <ListItemText primary={dataVar.Pants[element].name} />
                            </ListItem>
                        })
                    }
                </List>
            </Collapse>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CheckroomIcon />
                </ListItemIcon>
                <ListItemText className="listItemText" primary="Shoes" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        Object.keys(dataVar.Shoes).map(function (element, index) {
                            return <ListItem key={index} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <RadioButtonUncheckedIcon />
                                </ListItemIcon>
                                <ListItemText primary={dataVar.Shoes[element].name} />
                            </ListItem>
                        })
                    }
                </List>
            </Collapse>

        </List >
    )
}