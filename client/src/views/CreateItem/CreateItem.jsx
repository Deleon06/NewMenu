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
                Add menu Item
                <br />
               <select className="dropdown" onChange={handleChange} name="category_id">
               {categories.map(category => (
                <option value={category.id} name={category.name}>{category.name}</option>
               ))}
               </select>
                <input
                    name="name"
                    type="text"
                    value = {input.name}
                    onChange={handleChange}
                />
                <input 
                    name="price"
                    type="Number"
                    value = {input.price}
                    onChange={handleChange}
                />
            </label>
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
