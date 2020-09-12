import React, { useEffect } from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import 'css/App.css';
import Header from "components/Header"
import Home from "components/Home"
import Checkout from "components/Checkout"
import Login from "components/Login"
import Register from 'components/Register'
import Payment from 'components/Payment'
import {auth} from 'firebaseInit/firebase'
import {useStateValue} from "Redux/StateProvider"




function App() {
  const [{},dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type : 'SET_USER',
          user : authUser.email
        })
      }else {
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header/>
            <Payment />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




/* import { SnackbarProvider } from 'notistack';
import {IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

 */

 /*   const notistackRef = React.createRef();
  const onClickDismiss = key => () => {notistackRef.current.closeSnackbar(key)} */

  /*            <SnackbarProvider 
              maxSnack={3} 
              hideIconVariant 
              dense
              ref={notistackRef}
              action={(key) => (
                  <IconButton  size="small" aria-label="close" color="inherit" onClick={onClickDismiss(key)}>
                      <Close fontSize="small" />
                  </IconButton>
              )}
              style={{marginTop:"20px"}}
            > 
          
             </SnackbarProvider> 
          */