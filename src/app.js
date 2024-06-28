import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import User from './views/usuario';
import Admin from './views/admin';
import Detalle from './views/detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
        <Route path="/detalle" component={Detalle} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

