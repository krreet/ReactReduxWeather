import { APP_ID, WEATHER_ENDPOINT } from "./Constants";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_BEGIN = "GET_WEATHER_BEGIN";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export function getWeather(loc) {
  return (dispatch, getState) => {
    dispatch({ type: GET_WEATHER_BEGIN });
    return fetch(`${WEATHER_ENDPOINT + loc}&APPID=${APP_ID}&units=metric`)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          weather: json
        });
      })
      .catch(error => {
        dispatch({ type: GET_WEATHER_ERROR, error });
      });
  };
}
