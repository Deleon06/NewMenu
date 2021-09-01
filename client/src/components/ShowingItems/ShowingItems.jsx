import React from 'react'
import EditingItems from '../EditingItems/EditingItems'
import './ShowingItems.css'

export default function ShowingItems(props) {
    
    const handleDeleteItem = props.handleDeleteItem
    const handleEditItem = props.handleEditItem
    const menuData = props.menuData
    return (
        <>
        <div id={props.category.id} key={props.category.id}>
            <h3>{props.category.name}</h3>
            </div>
            {
        props.category.items.map((item) => (
            <EditingItems
            item ={item}
            handleDeleteItem={handleDeleteItem}
            handleEditItem  = {handleEditItem }
            menuData ={menuData}
            />
        ))}
        </>
           )
    }
