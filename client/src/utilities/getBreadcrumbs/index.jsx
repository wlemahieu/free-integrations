import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { capitalize } from 'lodash';
import allowedPaths from '../allowedPaths';

const Crumb = props => {
	return (
		<Breadcrumb.Item key={props.key}>
			<Link to={props.to}>{props.title}</Link>
		</Breadcrumb.Item>
	);
};

export default function (paths) {
	const allowed = paths.filter(url => allowedPaths.includes(url));
	allowed.unshift('/home');
	return allowed.map((url, index) => {
		const path = url.split('/').filter(i => i)[0];
		const to = path === 'home' ? '/' : url;
		const props = { key: path, title: capitalize(path), to: to };
		return <Crumb { ...props } />;
  });
}
