import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Breadcrumb, Button, Layout } from 'antd';
import utils from '../../../utilities';

const { Content } = Layout;

const Home = () => {
  return (
		<div>
		</div>
	);
}

const Chat = () => {
  return (
		<div>
			<Button>Chat</Button>
		</div>
	);
}

class Body extends PureComponent {
	render() {
		const { location } = this.props;
		const paths = utils.getLocationPaths(location);
		const breadcrumbs = utils.getBreadcrumbs(paths);
		return (
			<Content className="content">
				<Breadcrumb>{breadcrumbs}</Breadcrumb>
				<Switch>
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
