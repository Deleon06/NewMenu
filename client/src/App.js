import './App.css';
import './layouts/Layout'
import Layout from './layouts/Layout';
import SignIn from './views/SignIn/SignIn';
import {Switch, Route, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { registerUser, removeToken, signInUser, verifyUser } from './services/auth';
import Register from './views/Register/Register';
import MainContainer from './containers/MainContainer';
import { addCategoryToMenu, deleteCategory, putCategory } from "./services/categories"
import { addMenu} from './services/menus'
import CreateMenu from './views/CreateMenu/CreateMenu';
import CreateItem from './views/CreateItem/CreateItem';
import { addItemToCategory, deleteItem, putItem } from './services/items';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuData, setMenuData] = useState(null)
  const history = useHistory()

  useEffect(() =>{
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleSignIn = async(signInData) => {
    const userData = await signInUser(signInData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async(registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleSignOut = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  const handleCreateMenu = async (menuName) => {
    const menuData = await addMenu(menuName);
   
    setMenuData(menuData)
  };

  const handleCreateCategory = async (categoryFormData) => {
    const newCategory = await addCategoryToMenu(categoryFormData);
    setMenuData(prevState => ({
      ...prevState,
      categories: [...prevState.categories, newCategory]
    }))
  };

  const handleCreateItem = async(itemsFormData) => {
    const newItem = await addItemToCategory(itemsFormData);
    setMenuData(prevState => ({
      ...prevState,
      ...prevState.categories.forEach(category =>{
        console.log(category)
        console.log(newItem.category_id)
        if(category.id === newItem.category_id){
         category.items.push(newItem)
        }
      })
    }))
  }

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id.target.value)
    menuData.categories = menuData.categories.filter(categories => categories.id !== parseInt(id.target.value))
    setMenuData(prevState => ({
      ...prevState,
      categories: [...prevState.categories]
    }))
    }

  const handleEditCategory = async(categoryName, editCategoryForm) => {
      const updatedCategory = await putCategory({name: categoryName}, editCategoryForm.categoryId)
      menuData.categories = menuData.categories.map(category => {
        return category.id === updatedCategory.id ? updatedCategory : category
      })
      setMenuData(prevState => ({
        ...prevState,
        categories: [...prevState.categories]
      }))
  }

  const handleDeleteItem = async (id) => {
    await deleteItem(id.target.value)
    menuData.categories.items = menuData.categories.items.filter(item => item.id !== parseInt(id.target.value))
    setMenuData(prevState => ({
      ...prevState,
      categories: [...prevState.categories.items]
    }))
    }

 const handleEditItem = async( editItemForm) => {
      const updatedItem = await putItem({name: editItemForm.name}, editItemForm.item_id)
      console.log(updatedItem)
      console.log(menuData)
      setMenuData(prevState => ({
        ...prevState,
        ...prevState.categories.forEach(category =>{
          console.log(category)
          if(category.id === updatedItem.category_id){
           category.items.map(item => {
             console.log(item)
             return item.id === updatedItem.id ? item.name = updatedItem.name : item
           })
          }
        })
      }))
      console.log(menuData)
  }


  return (
    <div className="App">
      <Layout currentUser ={currentUser} handleSignOut={handleSignOut}>
        <Switch>
          <Route path ='/create/:menuName'>
            <CreateItem 
            menuData ={menuData} 
            handleCreateItem={handleCreateItem}
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
            />
          </Route>
          <Route path ='/SignIn'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/create'>
            <CreateMenu 
            handleCreateMenu ={handleCreateMenu} 
            handleCreateCategory={handleCreateCategory} 
            handleDeleteCategory={handleDeleteCategory}
            handleEditCategory={handleEditCategory}
            menuData ={menuData} 
            />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/'>
             <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
