import { Link } from 'react-router-dom'
import './Layout.css'

export default function Layout(props) {
    const {currentUser, handleSignOut} = props;
    return (
        <header>
            <Link to = '/'><h1>NewMenu</h1></Link>
            {
                currentUser ? (
                    <div>
                        <p>{currentUser.username}</p>
                    </div>
                ) : (
                    <div>
                        <Link to='/signin'>Signin</Link>
                        <Link to='/register'>Create an Account</Link>
                    </div>
                )
            }
            {currentUser && (
                <div id="navBar">
                    <Link to="/create" class="navItem">Create a New Menu</Link>
                    <Link to="/completedmenus" class="navItem">Completed Menu</Link>
                    <Link to="menus" class="navItem">Menu List</Link>
                    <Link to="/" onClick={handleSignOut} class="navItem">Sign Out</Link>
                </div>
            )}
             <hr />
            {props.children}
        </header>
    )
}
