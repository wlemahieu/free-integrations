import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import MenuBar from 'common/Layout/MenuBar';
import logo from 'assets/images/logo.png';

const { Header } = Layout;

const Head = props => (
  <Header>
    <img className="logo" src={logo} alt="Logo" />
    <MenuBar location={props.location} />
  </Header>
);

Head.propTypes = {
  location: PropTypes.object
};

Head.defaultProps = {
  location: {}
};

export default withRouter(Head);
