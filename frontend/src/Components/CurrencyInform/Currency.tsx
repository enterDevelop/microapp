import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducerState } from '../../Reducers/RootReducer'
import { getCurrentRubUsdCurrency } from '../../Actions/CurrencyActions';
import './style.scss';

interface CurrencyCombinedProps extends CurrencyStateProps, CurrencyDispatchProps { }

class Currency extends React.PureComponent<CurrencyCombinedProps> {

    public componentDidMount(): void {
        this.props.getCurrentCurrency()
    }

    public render(): React.ReactNode {
        const { isFetching, usdrub, errorMessage } = this.props
        if (isFetching)
            return <h2>Loading</h2>
        if (errorMessage)
            return null;
        const date = new Date();
        const dateString = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}.${date.getFullYear()}`;

        return (
            <div className="dollar">
                <span className="valueGreen">1$ = {usdrub.toFixed(2)} RUB</span>
                <span className="fordate">{dateString}</span>
            </div>
        );
    }
}

interface CurrencyStateProps {
    usdrub: number;
    isFetching: boolean;
    errorMessage: string;
}

interface CurrencyDispatchProps {
    getCurrentCurrency: () => void;
}

const mapStateToProps = (state: IRootReducerState): CurrencyStateProps => ({
    usdrub: state.currency.usdrub,
    isFetching: state.currency.fetching,
    errorMessage: state.currency.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch): CurrencyDispatchProps => ({
    getCurrentCurrency: () => dispatch(getCurrentRubUsdCurrency())
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

