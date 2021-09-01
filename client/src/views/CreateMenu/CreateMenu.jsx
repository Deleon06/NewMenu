import { useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import DeleteCategory from '../../components/DeleteCategory/DeleteCategory'
import { putMenu } from '../../services/menus'

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
    const {menuName} = useParams()
    const handleMenuChange = (e) =>{
        const { name, value } = e.target;
        setMenuFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleCategoryChange = (e) =>{
        const { name, value } = e.target;
        console.log(categoryName)
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
                e.preventDefault()
                handleCreateCategory(categoryFormData)
                e.target[0].value = ''
               }}
                >
                <label>
                    category
                    <input
                        type="text"
                        placeholder="sandwiches"
                        menu_Id = 'menu_Id'
                        name = 'name'
                        onChange={handleCategoryChange}
                    />
                </label>
                <button>add</button>
            </form>
               <h3>Categories</h3>
                {console.log(menuData)}
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
        <hr/>
        <Link to={`/create/${menuFormData.name}`}>
            <button>Continue</button>
        </Link> 
     </div>
    )
}
