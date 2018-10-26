import {SubmissionError} from 'redux-form';
import {API_URI} from '../../config';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const registerRequest = () => ({
  type: REGISTER_REQUEST
})

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
})

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerFailure = () => ({
  type: REGISTER_FAILURE
})
export const register = values => dispatch => {
    dispatch(registerRequest());
    return fetch(`${API_URI}/users`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
        })
        .then(() => dispatch(registerSuccess()))
        .catch(error =>
            Promise.reject(
                new SubmissionError({
                    [error.location]: error.message
                })
            )
        );
};
