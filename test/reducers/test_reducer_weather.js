import { expect } from '../test_helper';
import WeatherReducer from '../../src/reducers/reducer_weather';
import { FETCH_WEATHER } from '../../src/actions/types';
import { fetchWeather } from '../../src/actions/fetch_weather';

describe('Weather Reducer', () => {

  it('handles action with unknown type', () => {
    expect(WeatherReducer(undefined, {})).to.eql([]);
  });

  it('handle action type FETCH_WEATHER', () => {
    // resolve promise before sending to reducer to test
    fetchWeather('chicago').payload.then(response => {
      const action = { type: FETCH_WEATHER, payload: response}

      // check if reducer handles FETCH_WEATHER type and the action returns the correct data
      expect(WeatherReducer([], action)).to.have.deep.property('data.city.name', 'chicago');

    });
  });

})
