//import React from "react";
import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Forms";



class User extends Component {
  state = {
    users: [],
    user: "",
    password: ""
    
  };


  // componentDidMount() {
  //   this.loadUser();
  // }


  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.user && this.state.password) {
      API.saveUser({
        user: this.state.user,
        password: this.state.password
        
      })
        .then(res => this.getUser())
        .catch(err => console.log(err));
        
    }
  };


render() {
  return (

    //<Container fluid>
    <div className="mainLogin">
      {/*row with settings */}
      <div className="clr-row ">
        <div className="clr-col-sm-12 clr-col-md-12 clr-col-lg-12">
          {/*This is the navigation bar setup */}
          {/*navbar color */}
          <header className="header-4">
            <div className="branding">
              <a>
                {/*logo image/slogan*/}
                <img
                  src="image/gt.jpeg"
                  className="nav-link"
                  alt="Get a life logo"
                />
                <clr-icon shape="vm-bug" />
                <span className="title">The BucketList App!</span>
              </a>
            </div>
            {/*Dashboard and Browse links */}
            <div className="header-nav" />
            {/*nav bar logout */}
            <div className="header-actions">
              <a href="/welcome" className="nav-link nav-text">
                Back
              </a>
            </div>
          </header>
        </div>
      </div>
      {/*signup page */}
      <div className="clr-row">
        <div className="clr-col" />
        <div className="clr-col-6">
          <h2>Sign Up Today </h2>
      </div>
          <form action="/action_page.php">
            <div className="imgcontainer">
              <img
                src="/image/marathon/dread_avatar.jpg"
                alt="Avatar"
                className="avatar"
              />
              <a href="/dashboard">
                <h2>Upload image here</h2>
              </a>
            </div>

            <div className="container">
              {/*firstname */}
              <div className="clr-col-lg-6" id="first">
                <label for="uname">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="uname"
                  //required
                />
              </div>
              {/*lastname */}
              <div className="clr-col-lg-6" id="last">
                <label for="uname">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="uname"
                  //required
                />
              </div>
              
              {/*username */}
              <div className="clr-col-lg-12">
              <label>
                <b>user name</b>
                </label>
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="username"
                
              />
             
                </div>
                {/*password */}
                
                <div className="clr-col-lg-12">
              <label>
                <b>password</b>
                </label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password"
                
              />
              </div>
              <FormBtn
                disabled={!(this.state.user && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                
                Get Started
                </FormBtn>
                <label>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                  <span className="psw">
                    Forgot <a href="#">password?</a>
                  </span>
                </label>
              </div>
            
          
          <span />
        
        <div class="clr-col">
          <span />
        </div>
      </form>
      </div>
    </div>
    
    );
  }
}


export default User;

