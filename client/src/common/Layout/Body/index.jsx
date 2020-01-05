import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';
import getBreadcrumbs from '../../../utilities/getBreadcrumbs';
import getLocationPaths from '../../../utilities/getLocationPaths';
import Home from '../../Routes/Home';
import Chat from '../../Routes/Chat';
import License from '../../Routes/License';
const { Content } = Layout;

class Body extends PureComponent {
	render() {
		const { location } = this.props;
		const paths = getLocationPaths(location);
		const breadcrumbs = getBreadcrumbs(paths);
		return (
			<Content className="content">
				<Breadcrumb>{breadcrumbs}</Breadcrumb>
				<Switch>
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

export default withRouter(Body);
