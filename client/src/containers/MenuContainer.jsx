import { useEffect, useState } from "react"
import { getAllCategories } from "../services/categories"
import { getAllItems } from "../services/items"
import { getAllMenus } from '../services/menus'

export default function MenuContainer(props) {

    const [menus, setMenus] = useState([])
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])
    console.log(menus)

    

    
    useEffect(() => {
        if (props.id === menus.user_id) {

        const getMenus = async () => {
            const menuList = await getAllMenus()
            console.log(menuList)
            setMenus(menuList)
        }
        getMenus()
       
        if (menus.id === categories.menu_id) {

            const getCategories = async () => {
                const categoryList = await getAllCategories()
                console.log(categoryList)
                setCategories(categoryList)
        }
        getCategories()
        }

        if (categories.id === items.categories_id) {
            const getItems = async () => {
                const itemsList = await getAllItems()
                console.log(items)
                setItems(itemsList)
        }
        getItems()
        }

        }
    }, [])
    
    

    return (
        <div> 
            {menus.map((menu) => (
                <div className="menuName">
                    {menu.name}
                </div>
            ))}
            {categories.map((category) => (
                <div className="menuName">
                    {category.name}
                </div>
            ))}
            {items.map((item) => (
                <div className="menuName">
                    {item.name}
                    <br />
                    Price: ${item.price}
                </div>
            ))}
        </div>
    )
}
