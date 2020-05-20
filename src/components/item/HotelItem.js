import React, { Component } from 'react'

export default class HotelItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="col-md-4" style={{ padding: '15px' }}>
                <div style={{ display: 'inline-block', border: 'solid 1px #808080', padding: '15px' }}>
                    <div>
                        <img className="img-fluid" alt="eCommerce Product List" src="http://www.prepbootstrap.com/Content/images/template/productslider/product_001.jpg" />

                        <h2 className="float-xs-right">{item.hotelPhoneNumber}</h2>
                        <h2>{item.hotelName}</h2>

                        <p className="text-justify">{item.hotelDescription}</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}
