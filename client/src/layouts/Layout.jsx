import NavBar from '../components/NavBar/NavBar';
import './Layout.css'

export default function Layout(props) {
    const {currentUser, handleSignOut} = props;
    return (
        <header>
           <NavBar 
           currentUser={currentUser} 
           handleSignOut={handleSignOut}
           />
             <hr className="NavBar_hr"/>
            {props.children}
        </header>
    )
}
