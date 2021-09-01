import React from 'react'
import { useState } from 'react'
import ShowingItems from '../../components/ShowingItems/ShowingItems'
import './CreateItem'


export default function CreateItem(props) {
    const categories = props.menuData.categories
    const[input, setInput] = useState({category_id: '', name: '', price: 0})

    const handleDeleteItem = props.handleDeleteItem
    const handleEditItem = props.handleEditItem
    const handleCreateItem = props.handleCreateItem
    const menuData = props.menuData
    const handleChange = (e) => {
        const {name, value} = e.target;

        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }))
    }

    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(input)
            handleCreateItem(input)
        }}>
            <label>
                <h2>Add menu Item</h2>
                <label><h4>Category List</h4></label>
               <select className="dropdown" onChange={handleChange} name="category_id">
               {categories.map(category => (
                <option value={category.id} name={category.name}>{category.name}</option>
               ))}
               </select>
               <label><h4>item</h4></label>
                <input
                    name="name"
                    type="text"
                    value = {input.name}
                    onChange={handleChange}
                />
                <label><h4>Price</h4></label>
                <input 
                    name="price"
                    type="Number"
                    value = {input.price}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button>add</button>
        </form>
        {menuData.categories.map((category) => (
        <ShowingItems 
        menuData={menuData}
        category={category}
        handleDeleteItem={handleDeleteItem}
        handleEditItem={handleEditItem}
        />
        ))
        }          
        </>
    )
}
