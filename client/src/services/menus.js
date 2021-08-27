import api from './api-config'

export const getAllMenus = async () => {
    const res = await api.get('/menus')
    return res.data
}

export const getOneMenu = async (id) => {
    const res = await api.get(`/menus/${id}`)
    return res.data
}

export const postMenu = async (menuData) => {
    const res = await api.post('/menus', {menu: menuData})
    return res.data
}

export const putMenu = async(id, menuData) => {
    const res = await api.put(`/menus/${id}`, {menu: menuData})
    return res.data
}

export const deleteMenu = async(id) => {
    const res = await api.delete(`/menus/${id}`)
    return res
}