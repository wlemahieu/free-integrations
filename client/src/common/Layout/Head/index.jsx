import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';
import Logo from 'common/Logo';
import allowedPaths from 'utilities/allowedPaths';
import getLocationPaths from 'utilities/getLocationPaths';

const { Header } = Layout;

const MenuBar = params => {
  const paths = params.paths;
  const currentPath = paths.length ? paths[paths.length - 1] : '/';
  const pathMatch = allowedPaths.includes(currentPath);
  const selectedKeys = pathMatch ? currentPath : '';
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

class Head extends PureComponent {
  render() {
    const { location } = this.props;
    const paths = getLocationPaths(location);
    return (
      <Header>
        <Logo />
        <MenuBar paths={paths} />
      </Header>
    );
  }
}

Head.propTypes = {
  location: PropTypes.object
};

Head.defaultProps = {
  location: {}
};

export default withRouter(Head);
