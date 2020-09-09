import React from 'react';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import 'css/App.css';
import Header from "components/Header"
import Home from "components/Home"
import Checkout from "components/Checkout"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
