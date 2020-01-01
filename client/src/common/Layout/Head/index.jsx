import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from '../../Logo';
import allowedPaths from '../../../utilities/allowedPaths';
import getLocationPaths from '../../../utilities/getLocationPaths';

const { Header } = Layout;

const MenuBar = props => {
	const currentPath = props.paths.length ? props.paths[props.paths.length - 1] : '/';
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
		</Menu>
	);
}

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

export default withRouter(Head);
