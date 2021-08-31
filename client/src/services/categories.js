import api from './api-config'

export const getAllCategories = async () => {
    try {
    const res = await api.get('/categories')
    return res.data
    } catch(e) {
        throw e;
    }
}


export const addCategoryToMenu = async (categoryData) => {
    try {
    const res = await api.post(`/categories`, {category: (categoryData)})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const putCategory = async(categoryData, id) => {
    try {
    const res = await api.put(`/categories/${id}`, {category: categoryData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const deleteCategory = async(categoryId) => {
    try {
    const res = await api.delete(`/categories/${categoryId}`)
    return res
    } catch(e) {
        throw e;
    }
}