import {
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    DELETE_USER
} from '../constants/userConstants';


const initialState = {
    users: [],
    loading: false,
    error: false
};

const fetchAllUsersReducer = (state = initialState, action) => {

    switch (action.type) {

        case USER_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case USER_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case USER_FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case DELETE_USER:
            // delete element from array, don't need to make copy of object because filter() doesn't mutate array 
            const filteredUsers = state.users.filter(item => item.id !== action.id);
            
            return {
                ...state,
                users: filteredUsers
            };

        default:
            return state;
    }

}

export default fetchAllUsersReducer;