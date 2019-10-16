import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  GET_WEATHER_BEGIN,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR
} from "./actions";

const initialState = {
  weather: null,
  weatherIsLoading: false,
  weatherError: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_BEGIN:
      return {
        ...state,
        locations: null,
        locationsError: null,
        weatherIsLoading: true,
        weatherError: null
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherIsLoading: false,
        weather: action.weather
      };
    case GET_WEATHER_ERROR:
      return {
        ...state,
        weatherIsLoading: false,
        weatherError: action.error
      };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
