import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
class HeaderNav extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  render() {
    const loginRegLink = (
      <div>
        <Link to="/login"><button className="btn btn-primary" type="button">Login</button>  </Link>
        <Link to="/register"><button className="btn btn-primary" type="button">Register</button></Link>
      </div>
    )
    const userLink = (
      <div>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.logOut.bind(this)}>Logout</button>
      </div>
    )
    return (
      // <div>
      //     <nav className="float-right navbar-light bg-light">
      //         {localStorage.usertoken ? userLink : loginRegLink}
      //     </nav>

      // </div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="index.html">Start Bootstrap</a><button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars" /></button>Navbar Search */}
        <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">

            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </div>

      </nav>
    )
  }
}
export default withRouter(HeaderNav)