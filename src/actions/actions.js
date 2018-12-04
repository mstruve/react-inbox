import * as types from './actionTypes';
import axios from 'axios';


export const fetchMessageInfo = (id) => { 
    const request = axios({
        method: 'get',
        url: 'https://morning-falls-3769.herokuapp.com/api/messages',
        headers: {"id":id},
    });
    return (dispatch) => {
        request.then((data) => {
            dispatch({ type: FETCH_MESSAGE_INFO, payload: request})
        });
    };
};

export const fetchAllMessages = () => async dispatch => {
    const request = await axios('https://morning-falls-3769.herokuapp.com/api/messages');
    dispatch({ type: FETCH_ALL_MESSAGES, payload: request })
}