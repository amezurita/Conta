import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatIcon from "./components/ChatIcon"
import Home from "./components/pages/Home.js";
import NotFound from "./components/404/NotFound.js";
import Choose from "./components/pages/Choose"
import Login from "./components/pages/Login.js";
import Signup from "./components/pages/Signup.js";
import TenReg from "./components/pages/TenReg.js"
import Profile from "./components/pages/Profile.js";
import EditProfile from "./components/pages/EditProfile.js";
import Property from "./components/pages/Property.js";
import CreateProperty from "./components/pages/CreateProperty.js";
import Balance from "./components/pages/Balance.js";
import TennantProfile from "./components/pages/TennantProf.js";
import TennantPropertyProf from "./components/pages/TennantPropertyProf";
import Chat from "./components/pages/Chat"


const Router = () => (
  <>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/choose" component={Choose} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path ="/ten-signup"  component ={TenReg}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/create-property" component={CreateProperty} />
      <Route exact path="/balance" component={Balance} />
      <Route exact path="/property" component={Property} />
      <Route exact path="/tennant" component={TennantProfile} />
      <Route exact path="/ten-property" component={TennantPropertyProf} />
      <Route exact path="/chat" component={Chat}/>
      
      <Route component={NotFound} />
    </Switch>
</>
);

export default Router;
