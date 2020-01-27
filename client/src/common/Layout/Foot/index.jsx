import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Footer } = Layout;

const Foot = () => (
  <Footer className="centered">
    <span>Free Integrations</span>
    <Link to="/license" title="License"> (MIT License) </Link>
    <span>Created by Wesley LeMahieu</span>
  </Footer>
);

export default Foot;
