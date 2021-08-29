import { Link } from 'react-router-dom'

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
            <hr />
            {currentUser && (
                <div>
                    <Link to="/create">Create a New Menu</Link>
                    <Link to="/completedmenus">Completed Menu</Link>
                    <Link to="menus">Menu List</Link>
                    <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                </div>
            )}
            {props.children}
        </header>
    )
}
