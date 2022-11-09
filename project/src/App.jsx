import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './header/Header';
import ResultFieldFlight from './resultFieldFlight/ResultFieldFlight';
import Footer from './footer/Footer';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <ResultFieldFlight />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
