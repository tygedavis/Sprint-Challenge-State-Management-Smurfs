import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  POST_SMURF_START,
  POST_SMURF_SUCCESS
} from '../actions';

const initialState = {
  smurf: null,
  err: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURF_START:
    return{
      ...state,
      isFetching: true
    }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isFetching: false
      }
      case POST_SMURF_START:
        return {
          ...state,
        }
      case POST_SMURF_SUCCESS:
        return {
          ...state,
          smurf: [...state.smurf, action.payload]
        }
    default:
      return state
  }
}