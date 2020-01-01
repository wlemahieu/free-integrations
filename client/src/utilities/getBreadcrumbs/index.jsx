import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const nameMap = {
	'/': 'Home',
  '/chat': 'Chat'
};

const breadcrumbs = [
	<Breadcrumb.Item key="home">
		<Link to="/">Home</Link>
	</Breadcrumb.Item>,
];

export default function (paths) {
  const extraBreadcrumbs = paths.map((url, index) => {
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{nameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  return breadcrumbs.concat(extraBreadcrumbs);
}
