import React from 'react'
import { useState } from 'react'
import './CreateItem'


export default function CreateItem(props) {
    const categories = props.menuData.categories
    const[input, setInput] = useState({categoryName: ''})

    const handleChange = (e) => {
        const {categoryName, value} = e.target;

        setInput((prevInput) => ({
            ...prevInput,
            [categoryName]: value,
        }))
    }
    return (
        
        <form onSubmit={(e) => {
            e.preventDefault();
          
            }}
            >
            <label>
                Add menu Item
               <select className="dropdown" onChange={handleChange}>
               {categories.map(category => (
                <option value={category.name}>{category.name}</option>
               ))}
               </select>
                <input
                    type="text"
                    placeholder="Eggs Benedicts"
                    name = 'name'
                />
            </label>
            <button>add</button>
        </form>
    )
}
