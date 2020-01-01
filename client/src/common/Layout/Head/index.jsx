import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '../../../assets/images/logo.png';
import utils from '../../../utilities';

const { Header } = Layout;

const Logo = () => {
	return (
		<img
			className="logo"
			src={logo}
			alt="Logo"
		/>
	);
}

const MenuBar = props => {
	const possiblePaths = ['/', '/chat'];
	const currentPath = props.paths.length ? props.paths[props.paths.length - 1] : '/';
	const pathMatch = possiblePaths.includes(currentPath);
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
		const paths = utils.getLocationPaths(location);
		return (
			<Header>
				<Logo />
				<MenuBar paths={paths} />
			</Header>
		);
	}
}

export default withRouter(Head);
