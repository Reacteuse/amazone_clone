import React from 'react'
import {Search, ShoppingCart} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import 'css/Header.css'
import { useStateValue } from 'Redux/StateProvider'
import {auth} from 'firebaseInit/firebase'

import { withStyles } from '@material-ui/core/styles';
import {IconButton , Badge} from '@material-ui/core';

 const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    marginRight: theme.spacing(1)
  },
}))(Badge);
 
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
            url: user?'/payment':'/login' ,
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
                    <Link to='/checkout'>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={basket?.length} color="primary">
                                <ShoppingCart className="header_basket" />
                            </StyledBadge>
                        </IconButton>
                    </Link>
      
                </div>

            </div>
                    
        </div>
    )
}

export default Header
