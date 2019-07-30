import React from "react";
import "./style.css";
import "../utils/API";

class Login extends React.Component {
  state = {
    authenticated: false
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

  componentWillMount() {
    console.log("componentWillMount");
  }

  // signIn = () => {
  //     console.log(this);
  //     this.setState({
  //         authenticated: true,
  //         name: 'asdfasd'
  //     })
  // }

  handleFormSubmit = e => {
    e.preventDefault();

    var user = this.state.users.filter(each => each.user === this.state.uname);
    console.log(user[0].password);
    if (user[0].password === this.state.psw) {
      sessionStorage.id = user[0]._id
      alert("Hello " + this.state.uname)
      this.setState({
        authenticated: true
        
        
      });
    } else {
      alert("Either user doesn't exist, or password is incorrect.");
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    ;
    return (
      <React.Fragment>
        {this.state.authenticated === false && <h1>Please sign in</h1>}
        <form onSubmit={this.handleFormSubmit}>
          <div className="mainLogin">
            {/*row with settings */}
            <div className="clr-row ">
              <div className="clr-col-sm-12 clr-col-md-12 clr-col-lg-12">
                {/*This is the navigation bar setup */}
                {/*navbar color */}

              </div>
            </div>
            {/*END OF NAV */}
            <div className="clr-row">
              <div className="clr-col" />
              <div className="clr-col-6">
                <h2>Login to Get A Life</h2>

                <form action="/action_page.php">
                  <div className="imgcontainer">
                    <img
                      src="/image/marathon/dread_avatar.jpg"
                      alt="Avatar"
                      className="avatar"
                    />
                  </div>

                  <div className="container">
                    {/*User Name*/}
                    <div className="clr-col-lg-6" id="username">
                      <label for="uname">
                        <b>Username</b>
                      </label>
                      <br />
                      <input
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter Username"
                        name="uname"
                        required
                      />
                    </div>
                    {/*Password*/}
                    <div className="clr-col-lg-6" id="password">
                      <label for="psw">
                        <b>Password</b>
                      </label>
                      <br />
                      <input
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Enter Password"
                        name="psw"
                        required
                      />
                    </div>

                    <button type="submit">

                      {this.state.authenticated === false}
                      

                      <a href="/signup" id="color">
                        Get Signed Up
                      </a>
                    </button>

                    <button type="submit">Login</button>
                    <label>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="remember"
                      />{" "}
                      Remember me
                    </label>
                  </div>

                  <div className="containertwo">
                    <span className="psw">
                      Forgot <a href="#">password?</a>
                    </span>
                  </div>
                </form>
                <span />
              </div>
              <div className="clr-col">
                <span />
              </div>
            </div>
          </div>
        </form>

        {this.state.authenticated === true && <h1>Hello {this.state.email}
        
        </h1>}
      </React.Fragment>
    );
  }
}

export default Login;
