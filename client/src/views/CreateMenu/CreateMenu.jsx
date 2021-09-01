import { useState} from 'react'
import {  Link } from 'react-router-dom'
import DeleteCategory from '../../components/DeleteCategory/DeleteCategory'
import { putMenu } from '../../services/menus'
import './CreateMenu.css'

export default function CreateMenu(props) {
    
    const [menuFormData, setMenuFormData] = useState({
        name: '',
    })
    const [categoryFormData, setCategoryFormData] = useState({
        name: '',
        menu_id: 0,
    })

    const [editCategoryForm, setEditCategoryForm] = useState({
        categoryName: '',
        categoryId: 0,
    })

    const [menuToggle, setMenuToggle] = useState(false)
    const [editToggle, setEditToggle] = useState(false)
 
    const {name} = menuFormData
    const {categoryName} = editCategoryForm
    const handleCreateMenu = props.handleCreateMenu
    const handleCreateCategory = props.handleCreateCategory
    const handleDeleteCategory = props.handleDeleteCategory
    const handleEditCategory= props.handleEditCategory
    const menuData = props.menuData
    const handleMenuChange = (e) =>{
        const { name, value } = e.target;
        setMenuFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleCategoryChange = (e) =>{
        const { name, value } = e.target;
        setCategoryFormData((prevState) => ({
          ...prevState,
          menu_id: props.menuData.id,
          [name]: value,
        }));
      };

    const handleEditMenu = async(menuFormData) => {
        await putMenu(props.menuData.id, menuFormData)
    }

   

    return (
        <div className="createCategoryContainer">
            {
                menuToggle ? (
                    <>
                        { editToggle ? 
                            (
                                <>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleEditMenu(menuFormData)
                                    setEditToggle(false)
                                    }}
                                    >
                                    <input
                                        type="text"
                                        name= 'name'
                                        value={name}
                                        onChange={handleMenuChange}
                                    />
                                     <br />
                                    <button>Confirm</button>
                                    </form>
                                </>
                                
                            )
                        : (<div>{menuFormData.name} 
                             <br />
                            <button onClick={() => setEditToggle(true)}>edit</button>
                            </div>
                            )}
                    </>
                ) : (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateMenu(menuFormData)
                        setMenuToggle(true)
                        }}
                        >
                        <label>
                            Name of Menu
                            <br />
                            <input
                                type="text"
                                name = 'name'
                                value= {menuFormData.name}
                                onChange={handleMenuChange}
                            />
                        </label>
                        <br />
                        <button>add</button>
                    </form>
                )
            }
            
            <form onSubmit={(e) => {
                e.preventDefault()
                handleCreateCategory(categoryFormData)
                e.target[0].value = ''
               }}
                >
                <label>
                    Category
                    <br />
                    <input
                        type="text"
                        menu_Id = 'menu_Id'
                        name = 'name'
                        onChange={handleCategoryChange}
                    />
                </label>
                <br />
                <button>add</button>
            </form>
               <h3>Categories</h3>
                    {menuData ? (
                         menuData.categories.map((category) => (
                                    <DeleteCategory 
                                    category={category} 
                                    categoryName={categoryName}
                                    handleEditCategory={handleEditCategory}
                                    handleDeleteCategory={handleDeleteCategory}
                                    setEditCategoryForm={setEditCategoryForm}
                                    editCategoryForm={editCategoryForm}
                                    />                                
                                ))
                           ) : (
                        <>
                        </>
               )
                      }
        
        <Link to={`/create/${menuFormData.name}`}>
            <button>Continue</button>
        </Link> 
        <hr/>
     </div>
    )
}
