import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Footer } = Layout;
const Foot = () => {
  return (
    <Footer className="centered">
      <span>Free Integrations </span>
      <Link to="/license">(MIT License)</Link>
      <span> Created by Wesley LeMahieu</span>
    </Footer>
  );
};

export default Foot;
