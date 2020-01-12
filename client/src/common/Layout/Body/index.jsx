import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import getBreadcrumbs from 'utilities/getBreadcrumbs';
import getLocationPaths from 'utilities/getLocationPaths';
import Home from 'common/Routes/Home';
import Chat from 'common/Routes/Chat';
import License from 'common/Routes/License';
import News from 'common/Routes/News';

const { Content } = Layout;

class Body extends PureComponent {
  render() {
    const { location } = this.props;
    const path = getLocationPaths(location);
    const breadcrumbs = getBreadcrumbs(path);
    return (
      <Content className="content">
        <Breadcrumb>
          {
            breadcrumbs.map(crumb => (
              <Breadcrumb.Item key={crumb.path}>
                <Link to={crumb.to}>{crumb.title}</Link>
              </Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
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
  }
}

Body.propTypes = {
  location: PropTypes.object
};

Body.defaultProps = {
  location: {}
};

export default withRouter(Body);
