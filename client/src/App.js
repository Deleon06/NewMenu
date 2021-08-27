import './App.css';
import './layouts/Layout'
import Layout from './layouts/Layout';
import SignIn from './views/SignIn/SignIn';
import {Switch, Route, useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { registerUser, removeToken, signInUser, verifyUser } from './services/auth';
import Register from './views/SignIn/Register';
import MainContainer from './containers/MainContainer';
import MenuContainer from './containers/MenuContainer';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
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


  return (
    <div className="App">
      <Layout currentUser ={currentUser} handleSignOut={handleSignOut}>
        <Switch>
          <Route path ='/SignIn'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path='/show'>
            <MenuContainer />
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
