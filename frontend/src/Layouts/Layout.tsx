import Weather from "../Components/WatherInform/Weather";
import Currency from "../Components/CurrencyInform/Currency";
import * as React from "react";

class Layout extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <>
                <Weather />
                <Currency />
            </>
        );
    }
}

export default Layout;
