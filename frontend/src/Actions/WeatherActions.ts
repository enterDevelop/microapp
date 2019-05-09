import { GET_CURRENT_WEATHER } from "../Constants/WeatherConsts";
import IAction from "../Interfaces/IAction";
import axios from "axios";
import appSettingsProvider from "../appSettingsProvider";

export const getCurrentNovosibirskWeather = (city: string = "Novosibirsk"): IAction => ({
    type: GET_CURRENT_WEATHER,
    payload: axios.get(`${appSettingsProvider.weatherService}/api/v1/Weather?city=${city}`)
});
