import { GET_ADMIN_HOTEL, CREATE_HOTEL, DELETE_HOTEL, GET_HOTEL, UPDATE_HOTEL } from '../actionTypes/index';

export const fetchAdminHotel = () => (
    async dispatch => {
        const response = await fetch('http://127.0.0.1:5000/api/adminHotel/list');
        const adminHotel = await response.json();
        // console.log(adminHotel)
        dispatch({
            type: GET_ADMIN_HOTEL,
            adminHotel
        });
    }
)

const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const saveHotel = (data) => (
    async dispatch => {
        const hotel = await fetch('http://127.0.0.1:5000/api/adminHotel', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(hotel);
        await dispatch({
            type: CREATE_HOTEL,
            hotel
        });
    }
)
export const deleteHotel = (id) => (
    async dispatch => {
        const hotel = await fetch(`http://127.0.0.1:5000/api/adminHotel/delete/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(hotel);
        await dispatch({
            type: DELETE_HOTEL,
            id
        });
    }
)
export const fetchHotel = (id) => (
    async dispatch => {
        const response = await fetch(`http://127.0.0.1:5000/api/adminHotel/${id}`);
        const hotel = await response.json();
        console.log(hotel);
        dispatch({
            type: GET_HOTEL,
            hotel
        });
    }
)
export const updateHotel = (data) => (
    async dispatch => {
        const hotel = await fetch(`http://127.0.0.1:5000/api/adminHotel/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(hotel);
        await dispatch({
            type: UPDATE_HOTEL,
            hotel
        });
    }
)