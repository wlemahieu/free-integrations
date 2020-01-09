import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { startCase } from 'lodash';
import allowedPaths from '../allowedPaths';

const Crumb = params => {
  return (
    <Breadcrumb.Item key={params.key}>
      <Link to={params.to}>{params.title}</Link>
    </Breadcrumb.Item>
  );
};

export default function (paths) {
  const allowed = paths.filter(url => allowedPaths.includes(url));
  allowed.unshift('/home');
  return allowed.map((url) => {
    const path = url.split('/').filter(i => i);
    const idx = path.length - 1;
    const title = path[idx];
    const to = path === 'home' ? '/' : url;
    return <Crumb key={path} title={startCase(title)} to={to} />;
  });
}
