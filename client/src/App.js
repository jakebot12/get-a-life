import React from "react";
//import { FilePond, registerPlugin } from "react-filepond";
import Welcome from "./pages/Welcome";
import NavTabs from "./pages/NavTabs";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

//import "../src/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <NavTabs />
          {/* <Switch> */}

          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/browse" component={Browse} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />

          <Route path="/signup" component={Signup} />
          {/* </Switch> */}
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
