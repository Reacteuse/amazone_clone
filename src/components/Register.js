import React ,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {auth} from 'firebaseInit/firebase'
import 'css/Register.css'

function Register() {
    const history = useHistory()
    const [email,setEmail] =  useState('')
    const [password,setPassword] = useState('')

    const register = (event) => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if (auth) {
                    history.push('/')
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }


    return (
        <div className="register_box">
            <Link to="/"  >
                <img 
                    alt="amazon logo"
                    src={ process.env.PUBLIC_URL + '/images/amazon.png'}
                    className="register_logo"
                />
            </Link>

            <h2>Create an account</h2>
            <form>
                <div className="user_box">
                    <input 
                        type="text"
                        value={email}
                        onChange={(event)=> setEmail(event.target.value)}
                    />
                    <label>Username</label>
                </div>
                <div className="user_box">
                    <input 
                        type="Password"
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                    />
                    <label>Password</label>
                </div>

                <button 
                    className="register_buttton"
                    onClick={register}
                    type="submit"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    register
                </button>
            </form>
        </div>
    )
}

export default Register
