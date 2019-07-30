//import React from "react";
import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Forms";
import { storage } from "../firebase";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    usernameExists: false,
    users: [],
    user: "",

    password: "",
    firstname: "",
    lastname: ""
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:3001/api/users");
    const json = await response.json();
    console.log(json);
    this.setState({
      users: json
    });
    // request db or someone elses api
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // var userListItem = this.state.users.filter(
    //   each => each.user === this.state.uname
    // );
    // console.log(userListItem[0].user + " " + this.state.uname);
    // if (userListItem[0].user === this.state.uname) {
    //   alert(
    //     "This username already exists. Please login or choose different username"
    //   );
    //   this.setState({
    //     usernameExists: true,
    //     redirect: "/Login"
    //   });
    // } else {
      
      API.saveUser({

        user: this.state.uname,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        //redirect: "/Login"
      })
        .then(res => this.getUser)
        .catch(err => console.log(err))
        //redirect: "/Login"
       // {<Redirect to="/login"/>}
    // }
  };

  render() {
    if (this.state.usernameExists) return <Redirect to={this.state.redirect} />;

    return (
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
                src={this.state.url || "/image/marathon/dread_avatar.jpg"}
                alt="Avatar"
                className="avatar"
                height="100"
                width="200"
              />
              <a href="/dashboard">
                <h2>Upload image here</h2>
              </a>
            

              {/*username */}
              <div className="clr-col-lg-12">
                <label>
                  <b>user name</b>
                </label>
                <Input

                  value={this.state.uname}
                  onChange={this.handleInputChange}
                  name="uname"
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
              <FormBtn a href = "./Login"
                // disabled={!(this.state.user && this.state.password)}
                onClick={this.handleFormSubmit}
                
              >

                Get Started
              </FormBtn>
              <div>
              <Link to="/Login">Login</Link>
              </div>
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
