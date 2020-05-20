import React, { Component } from 'react'
import axios from 'axios';
export default class Register extends Component {
  constructor(props) {
    super(props)
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
    // alert("Xin chao")
    var r = this;
    e.preventDefault();
    axios.post('http://localhost:5000/register', {
      memberLogin: this.state.memberLogin,
      memberPass: this.state.memberPass
    })
      .then(function (response) {
        //   console.log(response.data)
        if (response.data === 'User already exists')
          alert('User already exists');
        else {
          r.props.history.push('/login')
        }
      })
      .catch(function (error) {
        console.log(error + "loi");
      });
  }
  render() {
    return (
      <div className="parent-box">


        <form className="box" noValidate onSubmit={this.onSubmit}>
          <div>
            <h1>Register</h1>
            <input type="text"
              name="memberLogin"
              placeholder="Enter memberLogin"
              value={this.state.memberLogin}
              onChange={this.onChange} />
            <input type="password"

              name="memberPass"
              placeholder="memberPass"
              value={this.state.memberPass}
              onChange={this.onChange} />
            <input type="submit" name="" value="Register" />
          </div>
        </form>
      </div>
    )
  }
}
