import { GET_COVID, GET_COVID_SUCCESS, GET_COVID_ERR } from '../slices/covidSlice';
import dayjs from "dayjs";

const today = dayjs().format('YYYY-MM-DD'); 

// Initial state

const initialState = {
  missions: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID:
      return { ...state, pending: true };
    case GET_COVID_SUCCESS:
    {
      action.covid.map((covid_country) => {
        return {
          name: covid_country.mission_id,
          confirmed: covid_country.mission_name,
          deaths: covid_country.description
        }
      });
      return { ...state, pending: false, missions: subset };
    }
    case GET_COVID_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;