//import React from "react";
import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Forms";
//import { storage } from "../firebase";
import { Redirect } from "react-router-dom";



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
    
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
   
      API.saveUser({

        user: this.state.uname,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname

      })
        .then(res => this.getUser)
        .catch(err => console.log(err));

    // }
  };


  render() {
    return (

      //<Container fluid>
      <div className="mainLogin">
        {/*row with settings */}
        <div className="clr-row ">

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
              <FormBtn
                
                // disabled={!(this.state.user && this.state.password)}
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

