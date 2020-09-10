import React from 'react'
import {Search, ShoppingBasket} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import 'css/Header.css'
import { useStateValue } from 'Redux/StateProvider'

 
 
function Header() {
 
    const [{basket}] = useStateValue()
    const options = [
        {
            id : 1 ,
            primaryText : "Sign In",
            secondaryText : "Hello",
            url: "/"
        } , 
        {
            id : 2 ,
            primaryText : "Orders",
            secondaryText : "Returns",
            url: "/"

        } , 
        {
            id : 3 ,
            primaryText : "Prime",
            secondaryText : "Your",
            url: "/"

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
                        <Link to={elmt.url} style={{textDecoration: "none" }}>
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
