import React from "react";
import Layout from "./Layouts/Layout";
import store from "./Store/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.99.100:63572";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

export default App;
