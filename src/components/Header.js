import React from 'react'
import {Search, ShoppingBasket} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import 'css/Header.css'
import { useStateValue } from 'Redux/StateProvider'
import {auth} from 'firebaseInit/firebase'

 
 
function Header() {
 
    const [{basket,user}] = useStateValue()
    const handleAuthentification = () => {
        if(user){
            auth.signOut()
        }
    }
    const options = [
        {
            id : 1 ,
            primaryText : user? 'Sign Out' : 'Sign In',
            secondaryText : user ? 'Hello '+user : 'Join Us',
            url: user? '/' : '/login' ,
            handleFunction : handleAuthentification 
        } , 
        {
            id : 2 ,
            primaryText : "Orders",
            secondaryText : "Returns",
            url: "/",
            handleFunction : null 
        } , 
        {
            id : 3 ,
            primaryText : "Prime",
            secondaryText : "Your",
            url: "/",
            handleFunction : null 

        } , 
    ]
    return (
        <div className="header_root">
            {/* LOGO */}
            <Link to="/">
                <img
                    alt="amazon logo"
                    className="header_logo"
                    src={ process.env.PUBLIC_URL   +' /images/amazon.png'}
                />
            </Link>
            {/* SEARCH BAR */}
            <div className="header_search">
                <input 
                    className="header_inputSearch"
                    type="text"
                />
                <Search className="header_iconSearch" />
            </div>
            {/* NAV */}
            <div className="header_nav">
                {options.map((elmt)=>(  
                    <div className="header_option" key={elmt.id}>
                        <span className="header_optionSecondary">{elmt.secondaryText}</span>
                        <Link to={elmt.url} style={{textDecoration: "none" }} onClick={elmt.handleFunction}>
                            <span className="header_optionPrimary">{elmt.primaryText}</span>
                        </Link>
                    </div>
                ))}

                <div className="header_basketOption">
                    <Link to="/checkout">
                        <ShoppingBasket className="header_basket"/>
                    </Link>
                    <span className="header_basketCount"> {basket?.length} </span>
                </div>
            </div>
                    
        </div>
    )
}

export default Header
