import {SubmissionError} from 'redux-form';

export const login = values => dispatch =>  {
  return fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    console.log('res', (res));
    if (!res.ok) {
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error =>
      Promise.reject(
          new SubmissionError({
              [error.location]: error.message
          })
      )
  );
}