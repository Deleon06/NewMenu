import { useState } from 'react'

export default function CreateMenu(props) {
    const [menuFormData, setMenuFormData] = useState({
        name: '',
    })
    const [categoryFormData, setCategoryFormData] = useState({
        menuId: 0,
        name: '',
    })
    const [toggle, setToggle] = useState(false)
 
    const {menuName} = menuFormData
    const {categoryName} = categoryFormData

    const handleCreateMenu = props.handleCreateMenu
    const handleCreateCategory = props.handleCreateCategory
    // console.log(props.menuId)
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
          menuId: props.menuId,
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
                        menuId = 'menuId'
                        name = 'name'
                        value={categoryName}
                        onChange={handleCategoryChange}
                    />
                </label>
                <button>add</button>
                <button>edit</button>
            </form>

            <button>Continue</button>
        </div>
    )
}
