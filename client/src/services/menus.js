import api from './api-config'

export const getAllMenus = async () => {
    try {
        const res = await api.get('/menus')
        return res.data
    } catch(e) {
        throw e;
    }
}

export const getAllUserMenus = async (id) => {
    try{
        const res = await api.get(`/menus/${id}/categeries`)
        return res.data
    } catch(e) {
        throw e;
    }
}

export const getOneMenu = async (id) => {
    try {
    const res = await api.get(`/menus/${id}`)
    return res.data
    } catch(e) {
        throw e;
    }
}

export const addMenu = async (menuData) => {
    try {
    const res = await api.post('/menus', {menu: menuData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const putMenu = async(id, menuData) => {
    try {
    const res = await api.put(`/menus/${id}`, {menu: menuData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const deleteMenu = async(id) => {
    try {
    const res = await api.delete(`/menus/${id}`)
    return res
    } catch(e) {
        throw e;
    }     
}