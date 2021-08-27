import { useEffect, useState } from "react"
import { getAllCategories } from "../services/categories"
import { getAllItems } from "../services/items"
import { getAllMenus } from '../services/menus'

export default function MenuContainer() {

    const [menus, setMenus] = useState([])
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        const getMenus = async () => {
            const menuList = await getAllMenus()
            setMenus(menuList)
        }
        getMenus()
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories()
            setCategories(categoryList)
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getItems = async () => {
            const categoryList = await getAllItems()
            setItems(categoryList)
        }
        getItems()
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
                    Price: {item.price}
                </div>
            ))}
        </div>
    )
}
