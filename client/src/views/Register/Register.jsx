import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

export default function Register(props) {
    const [formData, setFormData] = useState({ username: '', email: '',password: ''})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const { handleRegister } = props;

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
            }}>
            <h3>Register</h3>
            <label>
                Username:
                <br />
                <input 
                    type='text'
                    name='username' 
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label className="email_input">
                Email:
                <br />
                <input 
                    type='text'
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <br />
                <input
                    type="password" 
                    name='password' 
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <br />
            <Link to="/signin">Already Register?</Link>
            <button className="submit">Submit</button>
        </form>
    )
}
