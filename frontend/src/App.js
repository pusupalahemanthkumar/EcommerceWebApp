// Importing Required files and packages here.
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/loginScreen";
import RegisterScreen from "./screens/registerScreen";
import ShippingScreen from './screens/shippingScreen'
import PaymentScreen from './screens/paymentScreen'

import ProductScreen from "./screens/ProductScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import CartScreen from "./screens/cartScreen";
import OrderScreen from './screens/OrderScreen'

// Defining Component Here.
const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="py-3">
          <Container>
          <Route path='/order/:id' component={OrderScreen} />
            <Route path="/product/:id" exact component={ProductScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  );
};

export default App;
