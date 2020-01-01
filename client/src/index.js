import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import './index.css';
import Body from './common/Layout/Body';
import Head from './common/Layout/Head';
import Foot from './common/Layout/Foot';

const App = () => {
  return (
		<Layout>
			<Head />
			<Body />
			<Foot />
    </Layout>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
