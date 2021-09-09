import dayjs from 'dayjs';
import {
  GET_COVID_DETAILS,
  GET_COVID_DETAILS_SUCCESS,
  GET_COVID_DETAILS_ERR,
} from '../slices/detailsSlice';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

// Initial state

const initialState = {
  covidDetails: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID_DETAILS:
      return { ...state, pending: true };
    case GET_COVID_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        covidDetails: action.details.dates[today].countries,
      };
    case GET_COVID_DETAILS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
