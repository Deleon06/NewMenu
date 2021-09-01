import api from './api-config'

export const getAllItems = async () => {
    try {
    const res = await api.get('/items')
    return res.data
    } catch(e) {
        throw e;
    }
}


export const addItemToCategory = async (itemData) => {
    try {
    const res = await api.post(`/items`, {item: (itemData)})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const putItem = async(itemData, itemId) => {
    try {
    const res = await api.put(`/items/${itemId}`, {item: itemData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const deleteItem = async(itemId) => {
    try {
    const res = await api.delete(`/items/${itemId}`)
    return res
    } catch(e) {
        throw e;
    }
}