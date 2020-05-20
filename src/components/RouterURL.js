import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AdminHotel from './AdminHotel';
import FromHotel from './FormHotel';
import Home from './Home';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.usertoken
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)
export default class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <PrivateRoute exact path="/adminHotel" component={AdminHotel} />
                <PrivateRoute exact path="/addHotel" component={FromHotel} />
                <PrivateRoute exact path="/hotel/:_id" component={FromHotel} />

            </div>
        )
    }
}
