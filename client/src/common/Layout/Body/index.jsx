import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import BreadcrumbTrail from 'common/Layout/BreadcrumbTrail';
import Home from 'common/Routes/Home';
import Chat from 'common/Routes/Chat';
import License from 'common/Routes/License';
import News from 'common/Routes/News';

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
