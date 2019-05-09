import { combineReducers } from "redux";
import weatherReducer, { IWeatherReducer } from "./weatherReducer";
import currencyReducer, { ICurrencyReducer } from "./currencyReducer";

export interface IRootReducerState {
    weather: IWeatherReducer;
    currency: ICurrencyReducer;
}

export default combineReducers<IRootReducerState>({
    weather: weatherReducer,
    currency: currencyReducer
});
