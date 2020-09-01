import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Container, Nav, NavItem, NavLink
} from 'reactstrap';
import Products from './Products';
import Logos from './Logos';
import Categories from './Categories';
import Login from './Login';
import './App.css'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>

      <div>
        <h1 className="App">Tee-Commerce Admin</h1>
        <Nav tabs>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/logos">Logos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categories">Categories</NavLink>
          </NavItem>
        </Nav>
      </div>
      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/logos">
          <Logos />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>

        This is the landing page for a basic storefront web-app

      </p>
    </div>
  );
}

