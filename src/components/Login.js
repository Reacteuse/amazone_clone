import React ,{useState} from 'react'
import 'css/Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from 'firebaseInit/firebase'

function Login() {
    const history = useHistory()
    const [email,setEmail] =  useState('')
    const [password,setPassword] = useState('')

    const signIn = (event) => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/')
            })
            .catch((error) => {
                alert(error.message)
            })
     }


    return (
        <div className="login_box">
            <Link to="/"  >
                <img 
                    alt="amazon logo"
                    src={ process.env.PUBLIC_URL + '/images/amazon.png'}
                    className="login_logo"
                />
            </Link>

            <h2>login</h2>
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
                    className="login_buttton"
                    onClick={signIn}
                    type="submit"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sign In
                </button>
            </form>

          <div className="login_BottomSection">
 
                <a href="/register">You dont have an account ? </a>
                <a href="/cahgePassword">Forgot your password ?</a>
            </div>
 

        </div>
    )
}

export default Login
