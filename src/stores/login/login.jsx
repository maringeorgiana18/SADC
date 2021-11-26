import React from "react";
import Main from "./Main";
//import {useNavigate} from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: "",
      password:"",
    }
  }
  
  LoginClick = async() => {
    this.props.history.push("/main")
  };

  RegisterClick = () => {
    this.props.history.push("/register");
  };


  usernameHandler = (event)=> {
    this.setState({username: event.target.value});
  }

  passwordHandler = (event)=> {
    this.setState({password: event.target.value});
  }

  render() {
    
    //const navigate = useNavigate();
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">LOGIN</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="text" name="username" value = {this.state.username} placeholder="username" onChange={this.usernameHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" name="password" value = {this.state.password} placeholder="password" onChange={this.passwordHandler}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.LoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}