import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './redux/store'
import Auth from './pages/Auth'
import { checkAuth } from './redux/actions/userActions'
import SearchResult from './pages/SearchResult'
import CartPage from './pages/CartPage'
import OrderDetailPage from './components/CartPage/OrderDetailPage'
import PaymentPage from './components/CartPage/PaymentPage'
import MyOrderPage from './components/CartPage/MyOrderPage'
import Home from './pages/Home'
import Productdetails from './pages/Productdetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyAccount from './pages/MyAccount'

const App = () => {
  useEffect(() => {
    store.dispatch(checkAuth())
  })

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" component={Productdetails} />
        <Route path="/auth" component={Auth} />
        <Route path="/search" component={SearchResult} />
        <Route path="/cart" component={CartPage} />
        <Route path="/order-details" component={OrderDetailPage} />
        <Route path="/my-order" component={MyOrderPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/my-account" component={MyAccount} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
