import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import getBreadcrumbs from 'utilities/getBreadcrumbs';

const BreadcrumbTrail = props => {
  const breadcrumbs = getBreadcrumbs(props.location);
  return (
    <Breadcrumb>
      {breadcrumbs.map(crumb => (
        <Breadcrumb.Item key={crumb.path}>
          <Link to={crumb.to} title={crumb.title}>
            {crumb.title}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

BreadcrumbTrail.propTypes = {
  location: PropTypes.object
};

BreadcrumbTrail.defaultProps = {
  location: {}
};

export default BreadcrumbTrail;
