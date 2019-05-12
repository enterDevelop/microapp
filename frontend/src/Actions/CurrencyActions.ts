import { GET_RUBUSD_CURRENCY } from "../Constants/CurrencyConsts";
import IAction from "../Interfaces/IAction";
import axios from "axios";
import ICurrency from "../Interfaces/Api/ICurrency";

export const getCurrentRubUsdCurrency = (currencyData: ICurrency = { inputCurrency: "RUB", outputCurrency: "USD" }): IAction => ({
    type: GET_RUBUSD_CURRENCY,
    payload: axios.post(`/api/v1/convert`, currencyData)
});
