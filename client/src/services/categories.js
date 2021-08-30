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
    console.log(categoryData)
    const res = await api.post(`/categories`, {category: (categoryData)})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const putCategory = async(menuId,categoryId,categoryData) => {
    try {
    const res = await api.put(`/menus/${menuId}/categories/${categoryId}`, {category: categoryData})
    return res.data
    } catch(e) {
        throw e;
    }
}

export const deleteCategory = async(menuId, categoryId) => {
    try {
    const res = await api.delete(`/menus/${menuId}/categories/${categoryId}`)
    return res
    } catch(e) {
        throw e;
    }
}