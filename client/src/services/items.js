import api from './api-config'

export const getAllItems = async () => {
    try {
    const res = await api.get('/items')
    return res.data
    } catch(e) {
        throw e;
    }
}


export const addItemToCategory = async (menuId,categoryId, itemData) => {
    try {
    const res = await api.post(`menus/${menuId}/categories/${categoryId}/items`, {item: itemData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const putItem = async(menuId,categoryId,itemId,itemData) => {
    try {
    const res = await api.put(`menus/${menuId}/categories/${categoryId}/items/${itemId}`, {item: itemData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const deleteItem = async(menuId, categoryId, itemId) => {
    try {
    const res = await api.delete(`menus/${menuId}/categories/${categoryId}/items/${itemId}`)
    return res
    } catch(e) {
        throw e;
    }
}