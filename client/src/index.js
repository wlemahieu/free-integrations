import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Body from 'common/Layout/Body';
import Head from 'common/Layout/Head';
import Foot from 'common/Layout/Foot';
import store from 'redux/store';
import './index.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Head />
        <Body />
        <Foot />
      </Layout>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
