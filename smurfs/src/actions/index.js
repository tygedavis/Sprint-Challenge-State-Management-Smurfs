import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS ='POST_SMURF_SUCCESS'



export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    // console.log('Axios Res: ', res.data)
    dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log('Axios Error: ', err)
  })
}

export const giveSmurf = item => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
  .post('http://localhost:3333/smurfs')
  .then(res => {
    console.log('Post Res: ', res)
  })
  .catch(err => {
    console.log('Post error: ', err)
  })
}