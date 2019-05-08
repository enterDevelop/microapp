import IAction from "../Interfaces/IAction";
import * as constants from '../Constants/CurrencyConsts';

export interface ICurrencyReducer {
    usdrub: number;
    fetching: boolean;
    errorMessage: string;
};

const defaultState = { fetching: false, usdrub: 0, errorMessage: "" };

export default (pervState: ICurrencyReducer = defaultState, action: IAction) => {
    let state = pervState;
    switch (action.type) {
        case constants.GET_RUBUSD_CURRENCY_PENDING:
            state = { ...state, fetching: true }
            break;
        case constants.GET_RUBUSD_CURRENCY_FULFILLED:
            state = { ...state, fetching: false, usdrub: action.payload.data.usdrub };
            break;
        case constants.GET_RUBUSD_CURRENCY_REJECTED:
            state = { ...state, fetching: false, errorMessage: action.payload.message };
            break;
        default: break;
    }

    return state;
};