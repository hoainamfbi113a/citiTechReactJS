import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'

import AdminHotelItem from './item/AdminHotelItem';
import '../style/booking.css';
import { fetchAdminHotel, deleteHotel } from "../action/actions"
import Menu from './Menu';
class AdminHotel extends Component {
    componentWillMount = () => {
        this.props.fetchAdminHotel();
    }

    renderItem = () => {
        return (
            this.props.adminHotel.map((item, index) => {
                return (
                    <AdminHotelItem key={item._id} item={item} index={index} deleteHotel={this.props.deleteHotel} />
                )
            })
        )
    }
    render() {
        return (
            <div id="layoutSidenav">
                <Menu />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">


                            <div className="card mb-4">
                                <Link to='/addHotel'>  <button className="btn btn-primary">ADD HOTEL</button></Link>
                                <div className="card-bodys" style={{ marginTop: '-70px' }}>
                                    <div className="table-responsive">
                                        <table style={{ position: 'absolute', left: '-10px' }} className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>

                                            <thead>
                                                <tr>
                                                    <th>hotelName</th>
                                                    <th>hotelDescription</th>
                                                    <th>hotelPhoneNumber</th>
                                                    <th>hotelAvatar</th>
                                                    <th>Update</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tfoot>
                                                <tr>
                                                    <th>hotelName</th>
                                                    <th>hotelDescription</th>
                                                    <th>hotelPhoneNumber</th>
                                                    <th>hotelAvatar</th>
                                                    <th>Update</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </tfoot>
                                            <tbody>
                                                {this.renderItem()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchAdminHotel: () => dispatch(fetchAdminHotel()),
    deleteHotel: (id) => dispatch(deleteHotel(id))
});
const mapStateToProps = state => ({
    adminHotel: state.adminHotel
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminHotel);