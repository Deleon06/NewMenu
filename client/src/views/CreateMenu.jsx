import { useState } from 'react'

export default function CreateMenu(props) {
    const [menuFormData, setMenuFormData] = useState({
        name: '',
    })
    const [categoryFormData, setCategoryFormData] = useState({
        name: '',
        menu_id: 0,
    })
    const [toggle, setToggle] = useState(false)
 
    const {menuName} = menuFormData
    const {categoryName} = categoryFormData

    const handleCreateMenu = props.handleCreateMenu
    const handleCreateCategory = props.handleCreateCategory
    // console.log(props.menu_Id)
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

      

    return (
        <div>
            {
                toggle ? (
                    <>
                    <div>{menuFormData.name} </div>
                    <button>edit</button>
                    </>
                ) : (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleCreateMenu(menuFormData)
                        setToggle(true)
                        }}
                        >
                        <label>
                            Name of Menu
                            <input
                                type="text"
                                placeholder="My Restaurants Lunch Menu"
                                name = 'name'
                                value= {menuName}
                                onChange={handleMenuChange}
                            />
                        </label>
                        <button>add</button>
                    </form>
                )
            }
            
            <form onSubmit={(e) => {
                e.preventDefault(e)
                handleCreateCategory(categoryFormData)}}
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

            <button>Continue</button>
        </div>
    )
}
