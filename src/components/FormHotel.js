import React, { Component } from 'react'
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveHotel, fetchHotel, updateHotel } from '../action/actions';
import { Redirect } from 'react-router-dom';
import Menu from './Menu';

class FormHotel extends Component {
    state = {
        _id: this.props.hotel ? this.props.hotel._id : null,
        hotelName: this.props.hotel ? this.props.hotel.hotelName : '',
        hotelDescription: this.props.hotel ? this.props.hotel.hotelDescription : '',
        hotelPhoneNumber: this.props.hotel ? this.props.hotel.hotelPhoneNumber : "",
        hotelAvatar: this.props.hotel ? this.props.hotel.hotelAvatar : "",
        errors: {},
        loading: false,
        done: false
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            _id: nextProps.hotel._id,
            hotelName: nextProps.hotel.hotelName,
            hotelDescription: nextProps.hotel.hotelDescription,
            hotelPhoneNumber: nextProps.hotel.hotelPhoneNumber,
            hotelAvatar: nextProps.hotel.hotelAvatar,
        })
    }
    componentDidMount = () => {
        if (this.props.match.params._id) {
            this.props.fetchHotel(this.props.match.params._id);
        }
    }
    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({ [e.target.name]: e.target.value, errors });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    handleSubmit = (e) => {
        const { hotelName, hotelDescription, hotelPhoneNumber, hotelAvatar, _id } = this.state;
        e.preventDefault();

        // validation
        let errors = {};
        if (hotelName.trim() === '') errors.hotelName = "Can't be empty";
        if (hotelAvatar.trim() === '') errors.hotelAvatar = "Can't be empty";
        if (hotelDescription.trim() === '') errors.hotelDescription = "Can't be empty";
        if (hotelPhoneNumber.trim() === '') errors.hotelPhoneNumber = "Can't be empty";
        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.setState({ loading: true })
            if (_id) {
                this.props.updateHotel({ _id, hotelName, hotelDescription, hotelPhoneNumber, hotelAvatar }).then(
                    () => { this.setState({ done: true }) },
                    (err) => err.response.json().then(({ errors }) => this.setState({ errors, loading: false }))
                );
                this.setState({ done: true })
            }
            else {
                this.props.saveHotel({ hotelName, hotelDescription, hotelPhoneNumber, hotelAvatar }).then(
                    () => { this.setState({ done: true }) },
                    (err) => err.response.json().then(({ errors }) => this.setState({ errors, loading: false }))
                );
            }
        }
    }

    renderForm = () => (


        <div id="layoutSidenav">
            <Menu />
            <div className="container" style={{ width: '67%' }}>
                <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
                    <h1>Add New Hotel</h1>

                    <div className="form-group">
                        <label htmlFor="hotelName">hotelName</label>
                        <input className="form-control"
                            id="hotelName"
                            name="hotelName"
                            value={this.state.hotelName}
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.hotelName}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelDescription">hotelDescription URL</label>
                        <input className="form-control"
                            id="hotelDescription"
                            name="hotelDescription"
                            value={this.state.hotelDescription}
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.hotelDescription}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelPhoneNumber">hotelPhoneNumber</label>
                        <input className="form-control"
                            id="hotelPhoneNumber"
                            name="hotelPhoneNumber"
                            value={this.state.hotelPhoneNumber}
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.hotelPhoneNumber}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hotelAvatar">hotelAvatar</label>
                        <input className="form-control"
                            id="hotelAvatar"
                            name="hotelAvatar"
                            value={this.state.hotelAvatar}
                            onChange={this.handleChange}
                        />
                        <span>{this.state.errors.hotelAvatar}</span>
                    </div>
                    <div className="field">
                        <button className="ui primary button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )

    render = () => (
        <div>
            {this.state.done ? <Redirect to="/adminHotel" /> : this.renderForm()}
        </div>
    )
}

const mapStateToProps = (state, props) => (
    props.match.params._id ? { hotel: state.adminHotel.find(item => item._id = props.match.params._id) } : { hotel: null }
)

const mapDispatchToProps = dispatch => ({
    saveHotel: (data) => dispatch(saveHotel(data)),
    fetchHotel: (id) => dispatch(fetchHotel(id)),
    updateHotel: (data) => dispatch(updateHotel(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormHotel);