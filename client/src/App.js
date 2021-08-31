import './App.css';
import './layouts/Layout'
import Layout from './layouts/Layout';
import SignIn from './views/SignIn';
import {Switch, Route, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { registerUser, removeToken, signInUser, verifyUser } from './services/auth';
import Register from './views/Register';
import MainContainer from './containers/MainContainer';
import { addCategoryToMenu, deleteCategory, putCategory } from "./services/categories"
import { addMenu, putMenu } from './services/menus'
import CreateMenu from './views/CreateMenu';
import CreateItem from './views/CreateItem';


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
    history.push('/show')
  }

  const handleRegister = async(registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/show')
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
    // history.push('/show');
  };

  const handleCreateCategory = async (categoryFormData) => {
    const newCategory = await addCategoryToMenu(categoryFormData);
    setMenuData(prevState => ({
      ...prevState,
      categories: [...prevState.categories, newCategory]
    }))
  };

  const handleDeleteCategory = async (id) => {
    console.log(id.target.value)
    await deleteCategory(id.target.value)
    menuData.categories = menuData.categories.filter(categories => categories.id != id.target.value)
    setMenuData(prevState => ({
      ...prevState,
      categories: [...prevState.categories]
    }))
    }



  return (
    <div className="App">
      <Layout currentUser ={currentUser} handleSignOut={handleSignOut}>
        <Switch>
          <Route path ='/create/:id'>
            <CreateItem />
          </Route>
          <Route path ='/SignIn'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/create'>
            <CreateMenu 
            handleCreateMenu ={handleCreateMenu} 
            handleCreateCategory={handleCreateCategory} 
            handleDeleteCategory={handleDeleteCategory}
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
