import { GET_ADMIN_HOTEL, CREATE_HOTEL, DELETE_HOTEL, UPDATE_HOTEL,GET_HOTEL } from "../actionTypes/index"
export default (state = [], action) => {
    switch (action.type) {
        case GET_ADMIN_HOTEL:
            return action.adminHotel
        case CREATE_HOTEL:
            return [...state, action.hotel]
        case DELETE_HOTEL:
            return state.filter(item => item._id !== action.id)
        case UPDATE_HOTEL:
            return state.map(item => {
                if (item._id === action.hotel._id) return action.hotel;
                return item;
            })
        case GET_HOTEL:
            const index = state.findIndex(item => item._id === action.hotel._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.hotel._id) return action.hotel;
                    return item;
                })
            } else {
                return [
                    ...state,
                    action.hotel
                ]
            }
        default:
            return state;
    }
}