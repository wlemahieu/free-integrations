import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'antd';
import getSelectedKeys from 'utilities/getLocationPaths';

const MenuBar = props => {
  const selectedKeys = getSelectedKeys(props.location);
  return (
    <Menu
      className="menu"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={[selectedKeys]}
    >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/chat">
        <Link to="/chat">Chat</Link>
      </Menu.Item>
      <Menu.Item key="/news">
        <Link to="/news">News</Link>
      </Menu.Item>
      <Menu.Item style={{ float: 'right' }}>
        <Icon type="question-circle" />
      </Menu.Item>
    </Menu>
  );
};

MenuBar.propTypes = {
  location: PropTypes.object
};

MenuBar.defaultProps = {
  location: {}
};

export default MenuBar;
