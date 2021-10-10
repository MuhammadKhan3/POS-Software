import { Route, Router } from "react-router";
import { Switch } from "react-router";
import React from 'react'
import HeaderNavbar from "../headerNavbar/HeaderNavbar";
import Signup from "../Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../login/Login";
import Profile from "../Profile/Profile";
export const RouteLink = () => {
    return (
    <>
      <Switch>
          <Route path="/" exact>
            <HeaderNavbar/>
            <Dashboard/>
          </Route>
          <Route path="/Dashboard">
           <HeaderNavbar/>
            <Dashboard/>
          </Route>
          <Route path="/Category">
          </Route>
          <Route path="/Stock">
          </Route>
          <Route path="/Purchase">
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Profile">
            <HeaderNavbar/>
            <Profile/>
          </Route>
      </Switch>
    </>
    )
}
