import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class AdminHotelItem extends Component {
    render() {
        let { item, index, deleteHotel } = this.props;
        return (
            <tr>
                {/* <th scope="row">{index}</th> */}
                <td>{item.hotelName}</td>
                <td>{item.hotelDescription}</td>
                <td>{item.hotelPhoneNumber}</td>
                <td>{item.hotelAvatar}</td>
                <td><Link onClick={() => deleteHotel(item._id)}><button className="btn btn-primary" type="button">Delete</button> </Link></td>
                <td>   <Link to={`/hotel/${item._id}`}>  <button className="btn btn-primary" type="button">Update</button> </Link> </td>

            </tr>
        )
    }
}
