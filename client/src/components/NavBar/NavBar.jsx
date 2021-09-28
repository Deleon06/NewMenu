import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div>
             <Link to ='/'><h1>NewMenu</h1></Link>
            {
                props.currentUser ? (
                    <div>
                        <p>{props.currentUser.username}</p>
                    </div>
                ) : (
                    <div className="initial_nav">
                        <div className='sign_in'><Link to='/signin'>Sign In</Link></div>
                        <div className='register'><Link to='/register'>Create an Account</Link></div>
                    </div>
                )
            }
            {props.currentUser && (
                <div id="navBar">
                    <Link to="/create" class="navItem">Create a New Menu</Link>
                    <Link to="/completedmenus" class="navItem">Completed Menu</Link>
                    <Link to="menus" class="navItem">Menu List</Link>
                    <Link to="/" onClick={props.handleSignOut} class="navItem">Sign Out</Link>
                </div>
            )}
        </div>
    )
}
