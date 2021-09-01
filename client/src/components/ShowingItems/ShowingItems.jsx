import React from 'react'
import { useState } from 'react'
import './ShowingItems.css'

export default function ShowingItems(props) {
    const [itemEditToggle, setItemEditToggle] = useState(false)
    const handleDeleteItem = props.handleDeleteItem
    const itemName = props.itemName
    const editItemForm = props.editItemForm
    console.log(props)
    return (
        <>
        { itemEditToggle ?
        (
            <form onSubmit={(e) => {
                e.preventDefault();
                props.handleEditItem(itemName, editItemForm)
                setItemEditToggle(false)
                }}>
                <lable>{props.category.item.name}</lable>
                <br/>
                <input 
                type='text'
                itemName='itemName'
                id= {props.category.item.id}
                value={props.itemName}
                onChange={(e) => props.setEditItemForm({itemName: e.target.value, itemId: props.category.id})}
                />
                <br />
                <button className="DeleteItemButton">confirm</button>
            </form>
        ) : (
            //<button className="DeleteItemButton" value={props.category.id} onClick={()=> setItemEditToggle(true)}>edit</button>
        //<button className="DeleteItemButton" value={props.category.id} onClick={handleDeleteItem}>delete</button>
        //
        (console.log(props)),
        <div id={props.category.id} key={props.category.id}>
        <div>{props.category.name}
        
        </div>
        <br />
    
    </div>
           
        )

        }
        </>
)
    }
