import React, { useEffect } from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import 'css/App.css';
import Header from "components/Header"
import Home from "components/Home"
import Checkout from "components/Checkout"
import Login from "components/Login"
import Register from 'components/Register'
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
