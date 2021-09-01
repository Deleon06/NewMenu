import React from 'react'
import { useState } from 'react'

export default function EditingItems(props) {
    const [itemEditToggle, setItemEditToggle] = useState(false)
    const item = props.item
    const editItemForm = props.editItemForm
    const handleDeleteItem = props.handleDeleteItem
    const itemName = props.itemName

    return ( 
             itemEditToggle ? (
        
            <form onSubmit={(e) => {
                e.preventDefault();
                props.handleEditItem(itemName, editItemForm)
                setItemEditToggle(false)
                }}>
                <lable>{item.name}</lable>
                <br/>
                <input 
                type='text'
                itemName='itemName'
                id= {item.id}
                value={item.name}
                />
                <br />
                <button className="DeleteItemButton">confirm</button>
            </form>
       
        ) : (
           
            console.log(props),
                <div>{item.name}
                    <div>${item.price}</div>
                    <button className="DeleteItemButton"  onClick={()=> setItemEditToggle(true)}>edit</button>
                    <button className="DeleteItemButton"  onClick={handleDeleteItem}>delete</button>
                </div>
           
        )

        )
}
