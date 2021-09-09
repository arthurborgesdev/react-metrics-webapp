import covidReducer from '../redux/covid/covid';
import detailsReducer from '../redux/covid/details';

describe('test initial state', () => {
  test('should return the initial state of covid reducer', () => {
    expect(covidReducer(undefined, {})).toEqual({
      covidCountries: [],
    });
  });

  test('should return the initial state of details reducer', () => {
    expect(detailsReducer(undefined, {})).toEqual({
      covidDetails: [],
    });
  });

  test('return initial state with pending true after the starting action', () => {
    const GET_COVID = 'covid/covidslice/GET_COVID';
    expect(covidReducer(undefined, { type: GET_COVID })).toEqual({
      covidCountries: [],
      pending: true,
    });
  });

  test('return initial state with pending true after the starting action', () => {
    const GET_COVID_DETAILS = 'covid_details/detailsslice/GET_COVID_DETAILS';
    expect(detailsReducer(undefined, { type: GET_COVID_DETAILS })).toEqual({
      covidDetails: [],
      pending: true,
    });
  });
});
