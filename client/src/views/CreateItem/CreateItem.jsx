import React from 'react'
import { useState } from 'react'
import './CreateItem'


export default function CreateItem(props) {
    console.log(props)
    const categories = props.menuData.categories
    console.log(categories)
    const[input, setInput] = useState({categoryName: ''})
    console.log(input)

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
