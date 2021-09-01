import React from 'react'
import { useState } from 'react'
import EditingItems from '../EditingItems/EditingItems'
import './ShowingItems.css'

export default function ShowingItems(props) {
    
    const handleDeleteItem = props.handleDeleteItem
    const itemName = props.itemName
    const editItemForm = props.editItemForm
    const menuData = props.menuData
    return (
        <>
        <div id={props.category.id} key={props.category.id}>
            <div>{props.category.name}
            </div> </div>
            {
        props.category.items.map((item) => (
            <EditingItems
            item ={item}
            handleDeleteItem={handleDeleteItem}
            editItemForm={editItemForm}
            itemName ={itemName}
            menuData ={menuData}
            />
        ))}
        </>
           )
    }
