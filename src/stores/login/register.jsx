import React from "react";
//import {useHistory} from "react-router-dom";



export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: "",
      email: "",
      password:"",
    }
  }

  usernameHandler = (event)=> {
    this.setState({username: event.target.value});
  }

  emailHandler = (event)=> {
    this.setState({email: event.target.value});
  }

  passwordHandler = (event)=> {
    this.setState({password: event.target.value});
  }

  render() {
    //let history = useHistory();
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">REGISTER</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="text" name="username" value = {this.state.username} placeholder="username" onChange={this.usernameHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="text" name="email" value = {this.state.email} placeholder="email" onChange={this.emailHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="text" name="password" value = {this.state.password} placeholder="password" onChange={this.passwordHandler}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}