import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootReducerState } from '../../Reducers/RootReducer';
import { getCurrentNovosibirskWeather } from '../../Actions/WeatherActions';
import './style.scss';

interface WeatherCombinedProps extends WeatherStateProps, WeatherDispatchProps { }

class Weather extends React.PureComponent<WeatherCombinedProps> {
    componentDidMount() {
        this.props.getCurrentWeather();
    }

    public render() {
        const { isFetching, temp, errorMessage } = this.props;
        const city = 'Новосибирск';
        const date = new Date();
        const dateString = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}.${date.getFullYear()}`;

        if (isFetching)
            return <h1>Loading</h1> // спиннер
        if (errorMessage)
            return null;
        return (
            <div className="weatherContainer">
                <span className="cityName">
                    {city}
                </span> 
                <span className="temp">
                    {temp}&#176;
                </span> 
                <span className="fordate">
                    {dateString}
                </span> 
            </div>
        );
    }
}

interface WeatherStateProps {
    city: string;
    temp: number;
    isFetching: boolean;
    errorMessage: string;
}

interface WeatherDispatchProps {
    getCurrentWeather: () => void;
}

const mapStateToProps = (state: IRootReducerState): WeatherStateProps => ({
    city: state.weather.data.city,
    temp: state.weather.data.temp,
    isFetching: state.weather.fetching,
    errorMessage: state.weather.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch): WeatherDispatchProps => ({
    getCurrentWeather: (city: string = 'Novosibirsk') => dispatch(getCurrentNovosibirskWeather(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);