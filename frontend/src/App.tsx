import React from 'react';
import Layout from './Layouts/Layout';
import store from './Store/store';
import {Provider} from 'react-redux';
import { LoginForm } from './Components/LoginForm/LoginForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <LoginForm />
      </Layout>
    </Provider>
  )
}

export default App;
