import {SubmissionError} from 'redux-form';

export const register = values => dispatch => {
    const API_URL = 'http://localhost:8080/api'
    return fetch(`${API_URL}/users`, {
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
        .then(() => console.log('Submitted with values', values))
        .catch(error =>
            Promise.reject(
                new SubmissionError({
                    [error.location]: error.message
                })
            )
        );
};
