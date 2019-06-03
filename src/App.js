import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router';
import Header from './components/header';
import Home from './components/home';
import Port from './components/portfolio';
import Ref from './components/references';
import Contact from './components/contact';
import Blog from './components/blog';
import Footer from './components/footer';
import './App.css';

class App extends Component{
  render() {
    return (
      //browser routing and switch for dynamic display of content and matching url
      <BrowserRouter >
        <div className="container">
          <Route path="/" component={Header} />
          <Switch>
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Port} />
              <Route path="/references" component={Ref} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </main>
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
