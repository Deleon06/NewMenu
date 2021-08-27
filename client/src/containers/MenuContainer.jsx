import React from 'react'
import { getAllMenus } from '../services/menus'

export default function MenuContainer() {
    const [menus, setMenus] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getMenus = async () => {
            const menuList = await getAllMenus()
            setMenus(menuList)
        }
    }, [])
    return (
        <div> 
            
        </div>
    )
}
