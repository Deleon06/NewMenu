import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function SignIn(props) {
    const [formData, setFormData] = useState({ username: '', password: ''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const { handleSignIn } = props;

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSignIn(formData)
            }}>
            <h3>SignIn</h3>
            <label>
                Username:
                <input 
                    type='text'
                    name='username' 
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password" 
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <Link to="/register">Register</Link>
            <button>Submit</button>
        </form>
    )
}
