import IAction from '../Interfaces/IAction';
import IWeather from '../Interfaces/Api/IWeather';
import * as constants from '../Constants/WeatherConsts';

export interface IWeatherReducer {
    fetching: boolean;
    data: IWeather;  
    errorMessage: string;
};

const defaultState: IWeatherReducer = {
    fetching: false,
    data: { city: "", temp: 0 },
    errorMessage: ""
};

export default (pervState: IWeatherReducer = defaultState, action: IAction) => {
    let state = pervState;
    switch(action.type) {
        case constants.GET_CURRENT_WEATHER_PENDING: 
            state = { ...state, fetching: true };
            break;
        case constants.GET_CURRENT_WEATHER_FULFILLED: 
            state = { ...state, fetching: false, data: action.payload.data };
            break;
        case constants.GET_CURRENT_WEATHER_REJECTED:
            state = {...state, fetching: false, errorMessage: action.payload.message }
            break;
        default: break;
    }

    return state;
};