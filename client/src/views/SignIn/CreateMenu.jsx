import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addMenu } from '../../services/menus'

export default function CreateMenu() {
    const [input, setInput] = useState()
    const history = useHistory()

    const handleChange = (e) =>{
        const {id, value} = e.target;

        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }))
    }

    const handleMenuNameSubmit = async (e) => {
        e.preventDefault();
        await addMenu(input)
    }

    const handleCategoryNameSubmit = async (e) => {
        e.preventDefault();
        await addMenu(input)
    }

    return (
        <div>
            
            <form onSubmit={handleMenuNameSubmit}>
                <label>
                    Name of Menu
                    <input
                        type="text"
                        placeholder="My Restaurants Lunch Menu"
                        value={input.menu_name}
                        onChange={handleChange}
                    />
                </label>
                <button>add</button>
                <button>edit</button>
            </form>

            <form onSubmit={handleCategoryNameSubmit}>
                <label>
                    category
                    <input
                        type="text"
                        placeholder="sandwiches"
                        value={input.category_name}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    )
}
