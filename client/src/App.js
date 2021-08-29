import './App.css';
import './layouts/Layout'
import Layout from './layouts/Layout';
import SignIn from './views/SignIn';
import {Switch, Route, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { registerUser, removeToken, signInUser, verifyUser } from './services/auth';
import Register from './views/Register';
import MainContainer from './containers/MainContainer';
import MenuContainer from './containers/MenuContainer';
import { addCategoryToMenu, getAllCategories } from "./services/categories"
import { getAllItems } from "./services/items"
import { addMenu, getAllMenus } from './services/menus'
import CreateMenu from './views/CreateMenu';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [menus, setMenus] = useState([])
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [menuId, setMenuId] = useState()
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
    setMenus((prevState) => [...prevState, menuData]);
    setMenuId(menuData.id)
    // history.push('/show');
  };

  const handleCreateCategory = async (menuId, categoryName) => {
    const categoryData = await addCategoryToMenu(menuId, categoryName);
    setCategories((prevState) => [...prevState, categoryData]);
    // history.push('/show');
  };


  return (
    <div className="App">
      <Layout currentUser ={currentUser} handleSignOut={handleSignOut}>
        <Switch>
          <Route path ='/SignIn'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/create'>
            <CreateMenu handleCreateMenu ={handleCreateMenu} handleCreateCategory={handleCreateCategory} menuId ={menuId}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/show'>
            <MenuContainer currentUser ={currentUser}/>
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
