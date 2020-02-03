import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import BreadcrumbTrail from 'common/Layout/BreadcrumbTrail';
import Home from 'modules/Home';
import Chat from 'modules/Chat';
import License from 'modules/License';
import News from 'modules/News';

const { Content } = Layout;
const Body = props => {
  const { location } = props;
  return (
    <Content className="content">
      <BreadcrumbTrail location={location} />
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/license">
          <License />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Content>
  );
};

Body.propTypes = {
  location: PropTypes.object
};

Body.defaultProps = {
  location: {}
};

export default withRouter(Body);
