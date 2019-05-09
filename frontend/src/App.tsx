import React from "react";
import Layout from "./Layouts/Layout";
import store from "./Store/store";
import { Provider } from "react-redux";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

export default App;
