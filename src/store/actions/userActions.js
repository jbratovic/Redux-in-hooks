import {
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    DELETE_USER
} from '../constants/userConstants';

export const fetchAllUsers = () => async (dispatch) => {

    try {

        dispatch({
            type: USER_FETCH_REQUEST
        });

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        });
        const users = await response.json();

        dispatch({
            type: USER_FETCH_SUCCESS,
            payload: users
        });

    } catch (error) {
        dispatch({
            type: USER_FETCH_FAIL,
            payload: error || 'Something went wrong. Check your internet connection.'
        });
    }
}

export const deleteUser = (userID) => {
    return {
        type: DELETE_USER,
        id: userID // here for example purposes we do not use "payload" but "id" property name
    };
}