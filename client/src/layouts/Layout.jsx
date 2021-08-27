import { Link } from 'react-router-dom'

export default function Layout(props) {
    const {currentUser, handleSignOut} = props;
    return (
        <header>
            <h1>NewMenu</h1>
            {
                currentUser ? (
                    <div>
                        <p>{currentUser.username}</p>
                    </div>
                ) : (
                    <Link to='/signin'>Signin/Register</Link>
                )
            }
            <hr />
            {currentUser && (
                <div>
                    <Link to="/completedmenus">Completed Menu</Link>
                    <Link to="menus">Menu List</Link>
                    <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                </div>
            )}
            {props.children}
        </header>
    )
}
