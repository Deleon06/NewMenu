import { useState, useEffect } from 'react'
import { deleteCategory} from '../services/categories'
import { getOneMenu, putMenu } from '../services/menus'
import { useHistory } from 'react-router'

export default function CreateMenu(props) {
    
    const [menuFormData, setMenuFormData] = useState({
        name: '',
    })
    const [categoryFormData, setCategoryFormData] = useState({
        name: '',
        menu_id: 0,
    })

    const [menuToggle, setMenuToggle] = useState(false)
    const [editToggle, setEditToggle] = useState(false)
    const {name} = menuFormData
    const {categoryName} = categoryFormData
    const handleCreateMenu = props.handleCreateMenu
    const handleEdit = props.handleEdit
    const handleCreateCategory = props.handleCreateCategory
    const menuData = props.menuData
    const history = useHistory()
   
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

    const handleDeleteCategory = async(e) => {
        e.preventDefault()
        await deleteCategory(e.target.value);
        history.push('/create')
    }

    const handleEditMenu = async(menuFormData) => {
        console.log(props.menuData.id, menuFormData.name)
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
                                    <button>Confirm</button>
                                    </form>
                                </>
                                
                            )
                        : (<div>{menuFormData.name} 
                            <button onClick={() => setEditToggle(true)}>edit</button>
                            </div>
                            )}
                    </>
                ) : (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                           console.log(menuFormData)
                        handleCreateMenu(menuFormData)
                        setMenuToggle(true)
                        }}
                        >
                        <label>
                            Name of Menu
                            <input
                                type="text"
                                placeholder="My Restaurants Lunch Menu"
                                name = 'name'
                                value= {menuFormData.name}
                                onChange={handleMenuChange}
                            />
                        </label>
                        <button>add</button>
                    </form>
                )
            }
            
            <form onSubmit={(e) => {
                e.preventDefault(e)
                handleCreateCategory(categoryFormData)
               }}
                >
                <label>
                    category
                    <input
                        type="text"
                        placeholder="sandwiches"
                        menu_Id = 'menu_Id'
                        name = 'name'
                        value={categoryName}
                        onChange={handleCategoryChange}
                    />
                </label>
                <button>add</button>
            </form>
               <h3>Categories</h3>
                    {menuData ? (
                         menuData.categories.map((category) => (
                            <div>{category.name}
                                <button value={category.id} onClick={handleEdit}>edit</button>
                                <button value={category.id} onClick={handleDeleteCategory}>delete</button>
                            </div>
                        )) 
                    ) : (
                        <>
                        </>
               )
                      }
        <hr/>
            <button>Continue</button>
        </div>
    )
}
