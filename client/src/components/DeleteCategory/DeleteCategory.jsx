import React from 'react'
import { useState } from 'react'

export default function DeleteCategory(props) {
    const [categoryEditToggle, setCategoryEditToggle] = useState(false)
    const handleDeleteCategory = props.handleDeleteCategory
    const categoryName = props.categoryName
    const editCategoryForm = props.editCategoryForm
    

    return (
        <>
        { categoryEditToggle ? 
        (
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(editCategoryForm)
                props.handleEditCategory(categoryName, editCategoryForm)
                setCategoryEditToggle(false)
                }}>
                <lable>{props.category.name}</lable>
                <br/>
                <input 
                type='text'
                categoryName='categoryName'
                id= {props.category.id}
                value={props.categoryName}
                onChange={(e) => props.setEditCategoryForm({categoryName: e.target.value, categoryId: props.category.id})}
                />
                <button>confirm</button>
            </form>
        ) : (
        
        <div id={props.category.id} key={props.category.id}>
        <div>{props.category.name}</div>
        <button value={props.category.id} onClick={()=> setCategoryEditToggle(true)}>edit</button>
        <button value={props.category.id} onClick={handleDeleteCategory}>delete</button>
    </div>
           
        )

        }
        </>
)
    }
