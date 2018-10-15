

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
})

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = cheese => ({
  type: FETCH_CHEESE_SUCCESS,
  cheese
})

export const FETCH_CHEESE_FAILURE = 'FETCH_CHEESE_FAILURE';
export const fetchCheeseFailure = err => ({
  type: FETCH_CHEESE_FAILURE,
  err
})

export const fetchCheese = () => dispatch => {
  dispatch(fetchCheeseRequest())
  fetch(`http://localhost:8080/api/cheeses`)
    .then(res => {
      console.log('res.ok', res.ok)
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(cheese => {dispatch(fetchCheeseSuccess(cheese));
    }).catch(err => {dispatch(fetchCheeseFailure(err))
    })
}