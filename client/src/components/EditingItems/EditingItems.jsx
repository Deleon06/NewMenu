import React from 'react'
import { useState } from 'react'

export default function EditingItems(props) {
    const [itemEditToggle, setItemEditToggle] = useState(false)
    const item = props.item
    const [editItemForm, setEditItemForm] = useState({name: '', item_id: 0})
    const handleDeleteItem = props.handleDeleteItem
    const handleEditItem = props.handleEditItem
    const {name} = editItemForm
    const handleEditForm = (e) => {
        console.log(e.target)
        const {name, value} = e.target;
        setEditItemForm((prevState) => ({
            ...prevState,
            item_id: e.target.id,
            [name]: value,
        }))
    }

    return ( 
             itemEditToggle ? (
                
            <form onSubmit={(e) => {
                e.preventDefault();
                handleEditItem(editItemForm)
                setItemEditToggle(false)
                }}>
                <lable>{item.name}</lable>
                <br/>
                <input 
                type='text'
                name='name'
                id= {item.id}
                value={name}
                onChange={handleEditForm}
                />
                <br />
                <button className="DeleteItemButton">confirm</button>
            </form>
       
        ) : (
           
            console.log(props),
                <div>{item.name}
                    <div>${item.price}</div>
                    <button className="DeleteItemButton" id={item.id}  onClick={()=> setItemEditToggle(true)}>edit</button>
                    <button className="DeleteItemButton" id={item.id}  onClick={handleDeleteItem}>delete</button>
                </div>
           
        )

        )
}
