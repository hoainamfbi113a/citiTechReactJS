import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Menu extends Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav"><a className="nav-link" href="layout-static.html">Static Navigation</a><a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a></nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Manager</div>
                            <Link to="/adminHotel">  <a className="nav-link" href="charts.html"><div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                    Hotel</a></Link>
                            <a className="nav-link" href="#"><div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                    Booking</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
