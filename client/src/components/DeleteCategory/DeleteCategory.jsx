import React from 'react'
import { useState } from 'react'
import './DeleteCategory.css'

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
                <br />
                <button className="DeleteCategoryButton">confirm</button>
            </form>
        ) : (
        
        <div id={props.category.id} key={props.category.id}>
        <div>{props.category.name}
        <button className="DeleteCategoryButton" value={props.category.id} onClick={()=> setCategoryEditToggle(true)}>edit</button>
        <button className="DeleteCategoryButton" value={props.category.id} onClick={handleDeleteCategory}>delete</button>
        </div>
        <br />
    </div>
           
        )

        }
        </>
)
    }
