import React, { Component } from 'react'
import { login } from '../function/UserFunctions'
import '../style/login.css'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      memberLogin: '',
      memberPass: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    // alert("Xin chao");
    e.preventDefault()

    const user = {
      memberLogin: this.state.memberLogin,
      memberPass: this.state.memberPass
    }
    login(user).then(res => {
      if (res) {
        this.props.history.push('/adminHotel')
      }
    })
  }
  render() {
    return (
      <div className="parent-box">
        <form className="box" noValidate onSubmit={this.onSubmit}>
          <div>
            <h1>Login</h1>
            <input type="text"
              name="memberLogin"
              placeholder="Username"
              value={this.state.memberLogin}
              onChange={this.onChange} />
            <input type="password"
              name="memberPass"
              placeholder="Password"
              value={this.state.memberPass}
              onChange={this.onChange} />
            <input type="submit" name="" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}
