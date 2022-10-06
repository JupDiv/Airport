import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Header from './header/Header';
import Form from './form/Form';
import Main from './Main';
import Article from './Article';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Form />
      <Main />
      <Article />
      <Footer />
    </Router>
  );
};

export default App;
