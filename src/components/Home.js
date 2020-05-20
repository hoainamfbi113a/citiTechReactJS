import React, { Component } from 'react'
import HotelItem from './item/HotelItem'
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { fetchAdminHotel } from "../action/actions"
class Home extends Component {
    componentWillMount = () => {
        this.props.fetchAdminHotel();
    }

    renderItem = () => {
        return (
            this.props.adminHotel.map((item, index) => {
                return (
                    <HotelItem key={item._id} item={item} index={index} deleteHotel={this.props.deleteHotel} />
                )
            })
        )
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" style={{ marginTop: '50px' }}>
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchAdminHotel: () => dispatch(fetchAdminHotel()),
});
const mapStateToProps = state => ({
    adminHotel: state.adminHotel
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);